// HubSpot API integration for contact creation
// Docs: https://developers.hubspot.com/docs/api/crm/contacts

export interface HubSpotContactData {
  email: string;
  firstname?: string;
  lastname?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface HubSpotContact {
  id: string;
  properties: {
    email: string;
    firstname?: string;
    lastname?: string;
    company?: string;
    phone?: string;
    createdate: string;
    lastmodifieddate: string;
  };
}

class HubSpotService {
  private accessToken: string;
  private baseUrl = "https://api.hubapi.com";

  constructor() {
    this.accessToken = process.env.HUBSPOT_ACCESS_TOKEN || "";
    
    if (!this.accessToken) {
      console.warn("HubSpot access token not configured. Contact creation will be skipped.");
    }
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        "Authorization": `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HubSpot API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json();
  }

  /**
   * Create or update a contact in HubSpot
   * Uses email as the unique identifier
   */
  async createOrUpdateContact(data: HubSpotContactData): Promise<HubSpotContact | null> {
    if (!this.accessToken) {
      console.warn("HubSpot access token not configured. Skipping contact creation.");
      return null;
    }

    try {
      // Parse name into first and last name if provided
      let firstname: string | undefined;
      let lastname: string | undefined;
      
      if (data.firstname) {
        // If firstname is provided directly, use it as-is
        firstname = data.firstname;
        lastname = data.lastname;
      } else {
        // If we have a full name in firstname field or need to parse
        const nameParts = (data.firstname || "").trim().split(/\s+/);
        if (nameParts.length > 0 && nameParts[0]) {
          firstname = nameParts[0];
          if (nameParts.length > 1) {
            lastname = nameParts.slice(1).join(" ");
          }
        }
      }

      const properties: Record<string, string> = {
        email: data.email,
      };

      if (firstname) properties.firstname = firstname;
      if (lastname) properties.lastname = lastname;
      if (data.company) properties.company = data.company;
      if (data.phone) properties.phone = data.phone;
      if (data.message) properties.message = data.message;

      // Use the contacts batch upsert API to create or update based on email
      const response = await this.makeRequest<{ results: HubSpotContact[] }>(
        "/crm/v3/objects/contacts/batch/upsert",
        {
          method: "POST",
          body: JSON.stringify({
            inputs: [
              {
                idProperty: "email",
                id: data.email,
                properties,
              },
            ],
          }),
        }
      );

      if (response.results && response.results.length > 0) {
        console.log(`Successfully created/updated HubSpot contact: ${data.email}`);
        return response.results[0];
      }

      return null;
    } catch (error) {
      console.error("Error creating HubSpot contact:", error);
      // Don't throw error to prevent form submission failure
      return null;
    }
  }

  /**
   * Create a contact specifically for inquiry forms
   */
  async createInquiryContact(data: {
    email: string;
    name?: string;
    company?: string;
    content?: string;
  }): Promise<HubSpotContact | null> {
    return this.createOrUpdateContact({
      email: data.email,
      firstname: data.name,
      company: data.company,
      message: data.content,
    });
  }

  /**
   * Create a contact specifically for document requests
   */
  async createDocumentRequestContact(data: {
    email: string;
    name: string;
    company: string;
    phone: string;
  }): Promise<HubSpotContact | null> {
    return this.createOrUpdateContact({
      email: data.email,
      firstname: data.name,
      company: data.company,
      phone: data.phone,
    });
  }
}

// Export singleton instance
export const hubspotService = new HubSpotService();
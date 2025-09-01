# HubSpot Integration Setup

This document explains how to set up HubSpot integration for automatic contact creation when users submit inquiry forms or request documents.

## Required Environment Variables

Add the following environment variable to your Vercel deployment:

```bash
HUBSPOT_ACCESS_TOKEN=your_hubspot_access_token_here
```

## HubSpot Setup Instructions

### 1. Create a HubSpot App or Get Access Token

#### Option A: Private App (Recommended)
1. Go to your HubSpot account settings
2. Navigate to **Integrations** > **Private Apps**
3. Click **Create a private app**
4. Give your app a name (e.g., "Reminus Website Integration")
5. In the **Scopes** tab, select the following permissions:
   - `crm.objects.contacts.write` - Required for creating/updating contacts
   - `crm.objects.contacts.read` - Optional, for reading existing contacts
6. Click **Create app**
7. Copy the generated access token

#### Option B: OAuth App
1. Create an OAuth app in HubSpot developer settings
2. Follow HubSpot's OAuth flow to get an access token
3. Ensure the app has the required scopes mentioned above

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variable:
   - **Name**: `HUBSPOT_ACCESS_TOKEN`
   - **Value**: Your HubSpot access token
   - **Environment**: Production, Preview, Development (as needed)
4. Redeploy your application

### 3. Test the Integration

1. Submit a form on your website
2. Check your HubSpot contacts to verify the contact was created
3. Check your application logs for any HubSpot-related errors

## How It Works

When a user submits either form:

1. **Contact/Inquiry Form**: Creates a HubSpot contact with email, name, company, and stores the inquiry message
2. **Document Request Form**: Creates a HubSpot contact with email, name, company, and phone number

The integration uses HubSpot's batch upsert API, which means:
- If a contact with the same email already exists, it will be updated
- If no contact exists, a new one will be created
- Email is used as the unique identifier

## Error Handling

The HubSpot integration is designed to be non-blocking:
- If HubSpot is unavailable or there's an API error, the form submission will still succeed
- Errors are logged to the console but don't prevent the user from completing their action
- If the `HUBSPOT_ACCESS_TOKEN` environment variable is not set, HubSpot integration will be skipped with a warning

## Troubleshooting

### Common Issues

1. **403 Forbidden Error**: Check that your access token has the required scopes
2. **401 Unauthorized Error**: Verify your access token is correct and hasn't expired
3. **Contacts not appearing**: Check that the email address format is valid and the API call is successful

### Debug Logs

Check your Vercel function logs for HubSpot-related messages:
- Success: "Successfully created/updated HubSpot contact: [email]"
- Warning: "HubSpot access token not configured. Skipping contact creation."
- Error: "Error creating HubSpot contact: [error details]"

## Alternative: Zapier Integration

If you prefer using Zapier instead of direct API integration:

1. Remove the HubSpot integration code
2. Set up a Zapier webhook trigger
3. Configure the webhook URL in your environment variables
4. Modify the form actions to send data to the Zapier webhook
5. Create a Zapier workflow that receives the webhook data and creates HubSpot contacts

The direct API approach is recommended for better performance and fewer dependencies.
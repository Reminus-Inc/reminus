/**
 * HubSpotトラッキング情報を取得するユーティリティ関数
 */

/**
 * HubSpotのトラッキングクッキー（hubspotutk）を取得
 */
export function getHubspotutk(): string {
  if (typeof document === 'undefined') return '';

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'hubspotutk') {
      return value || '';
    }
  }
  return '';
}

/**
 * HubSpot APIに送信するためのコンテキスト情報を取得
 */
export function getHubSpotContext() {
  if (typeof window === 'undefined') {
    return {
      hutk: '',
      pageUri: '',
      pageName: ''
    };
  }

  return {
    hutk: getHubspotutk(),
    pageUri: window.location.href,
    pageName: document.title
  };
}
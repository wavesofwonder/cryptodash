// Background script for CryptoDash extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('CryptoDash extension installed');
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // This will be handled by the popup
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getStorage') {
    chrome.storage.local.get(request.keys, (result) => {
      sendResponse(result);
    });
    return true;
  }
  
  if (request.action === 'setStorage') {
    chrome.storage.local.set(request.data, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});

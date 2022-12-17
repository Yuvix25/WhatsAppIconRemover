'use strict';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (/^https?:\/\/web.whatsapp.com/.test(changeInfo.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        startIconRemover();
      },
    });
  }
});


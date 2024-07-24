chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    chrome.storage.local.remove(tabId.toString());
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.storage.local.get(tabId.toString(), function(result) {
        if (result[tabId] && result[tabId].newTitle) {
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: setTitle,
            args: [result[tabId].newTitle]
          });
        }
      });
    }
  });
  
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      chrome.storage.local.get(tab.id.toString(), function(result) {
        if (result[tab.id] && result[tab.id].newTitle) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setTitle,
            args: [result[tab.id].newTitle]
          });
        }
      });
    });
  });
  
  function setTitle(newTitle) {
    document.title = newTitle;
  }
  
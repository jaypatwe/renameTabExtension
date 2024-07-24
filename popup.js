document.addEventListener('DOMContentLoaded', function() {
  var renameButton = document.getElementById('renameButton');

  renameButton.addEventListener('click', function() {
    var newTitle = document.getElementById('newTitle').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getCurrentTitle
      }, (results) => {
        if (results && results[0] && results[0].result) {
          const originalTitle = results[0].result;
          chrome.storage.local.set({ [tab.id]: { originalTitle, newTitle } }, () => {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              function: setTitle,
              args: [newTitle]
            });
          });
        }
      });
    });
  });

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    chrome.storage.local.get([tab.id.toString()], function(result) {
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

function getCurrentTitle() {
  return document.title;
}

function setTitle(newTitle) {
  document.title = newTitle;
}

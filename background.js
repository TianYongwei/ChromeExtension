chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'zhihu.com'},
      })],
      actions: [new chrome.declarativeContent.RequestContentScript({js:["jquery.js","mute.js"]})]
    }]);
  });
});


chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'zhihu.com'},
      })],
      actions: [
        //不是知乎网站，图标变灰
        new chrome.declarativeContent.ShowPageAction(),
        //加载外部js，先加载jq，再mute.js，就可以在mute.js中使用jq
        new chrome.declarativeContent.RequestContentScript({js:["jquery.js","mute.js"]})
      ]
    }]);
  });
});


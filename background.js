  'use strict';
  
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
              hostContains: '.'
          },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
  });
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {

        // do your things
        // alert('hello')
    }
})
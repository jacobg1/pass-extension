console.log('change to', $)
let value = 'test'
chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });


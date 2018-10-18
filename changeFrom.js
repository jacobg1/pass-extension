console.log('change from', $)



chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
    if(result.key) {
        chrome.storage.sync.clear(function() {
            console.log('storage cleared', result.key);
          });

    }
  })


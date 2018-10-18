console.log('change to', $)
let value = ['test'];
let allPasswordInputs = $('input:password')
console.log(allPasswordInputs)
chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });


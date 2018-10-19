console.log('change to', $)
// if (typeof (allPasswordInputs) === 'undefined') {
//   var allPasswordInputs = $("input[type='password']")
//   console.log(allPasswordInputs)
//   chrome.storage.sync.set({
//     "object": allPasswordInputs
//   }, function () {
//     console.log(allPasswordInputs);
//   });
// }
  


// console.log(allPasswordInputs)


// chrome.storage.sync.clear(function () {
//   console.log('storage cleared', result.key);
// });
if (typeof (allPasswordInputs) === 'undefined') {
    var allPasswordInputs = $("input[type='password']")
}

allPasswordInputs.each(function(index, value) {
  console.log(value)
  value.attr('type', 'text')
})
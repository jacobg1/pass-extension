console.log('change to', $)


// chrome.storage.sync.set({key: value}, function() {
//     console.log('Value is set to ' + value);
//   });

if(typeof(allPasswordInputs) === 'undefined') {
    let allPasswordInputs = $('input:password')
    console.log(allPasswordInputs)
    allPasswordInputs.each(function () {
        console.log($(this))
        $(this).prop('type', 'text')
        $(this).attr('changed', true)
    })
}

console.log('change to', $)


if(typeof(allPasswordInputs) === 'undefined') {
    let allPasswordInputs = $('input:password')
    console.log(allPasswordInputs)
    allPasswordInputs.each(function () {
        console.log($(this))
        $(this).prop('type', 'text')
        $(this).attr('changed', true)
    })
}


console.log('change from', $)


if(typeof(allPasswordInputs) === 'undefined') {
    let allPasswordInputs = $('input:text')
    console.log(allPasswordInputs)
    allPasswordInputs.each(function () {
        console.log($(this))
        if($(this).attr('changed')) {
            $(this).prop('type', 'password')

            $(this).removeAttr('changed')
        }

    })
}

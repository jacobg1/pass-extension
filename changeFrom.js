console.log('change from', $)


if(typeof(allPasswordInputs) === 'undefined') {
    let allPasswordInputs = $('[changed=true]')
    console.log(allPasswordInputs)
    allPasswordInputs.each(function () {
        console.log($(this))
        $(this).prop('type', 'password')

            $(this).removeAttr('changed')
        // if($(this).attr('changed')) {
        //     $(this).prop('type', 'password')

        //     $(this).removeAttr('changed')
        // }

    })
}

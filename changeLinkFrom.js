console.log($)


if(typeof(allLinks) === 'undefined') {
    let allLinks = $('[linkChanged=true]')
    console.log(allLinks)
    allLinks.each(function () {
        $(this).removeAttr('target').removeAttr('linkChanged');
    })

}

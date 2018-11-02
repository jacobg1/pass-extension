console.log($)


if(typeof(allLinks) === 'undefined') {
    let allLinks = $('a[target!=blank]')
    console.log(allLinks.length)
    allLinks.each(function () {
        $(this).attr('target','_blank').attr('linkChanged', true);
    })
}

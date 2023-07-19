$(function(){
    'user strict'
    $(window).on('load', function(){
        $('#preloader').fadeOut(5000)
    })
})

    $(function () {
        $(window).on('scroll',function () {
            var scrollSize = $(window).scrollTop()
            if (scrollSize > 500) {
                $('#back-to-top').slideDown()
            } else{
                $('#back-to-top').scrollUp()
            }

            if (scrollSize > 50){
                $('#navbar').addClass('active')
            }   else {
                $('#navbar').removeClass('active')
            }
        })

        $('#back-to-top').on('click', function () {
            $('html,body').animate({
                scrollTop:0,
            },1000)
        })
    } )
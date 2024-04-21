//Promocode
$('#promo-menu').click(function(){
    $('.header').animate({opacity: "0.2"}, 200)
    $('main').animate({opacity: "0.2"}, 200)
    $('footer').animate({opacity: "0.2"}, 200)
    $('.promo').css({
        display: "block",
        width: "0%"
    })
    $( ".promo" ).animate({
        width: "40%"
    }, 400)

})

$('#close-promo').click(() => {
    $('.header').animate({opacity: "1"}, 200)
    $('main').animate({opacity: "1"}, 200)
    $('footer').animate({opacity: "1"}, 200)
    $( ".promo" ).animate({
        width: "0%"
    }, 400)
    $('.promo').css({
        display: "none",
    })
    
})

//signIn

$('#signIn-menu').click(function openSignIn(){
    $('.header').animate({opacity: "0.2"}, 200)
    $('main').animate({opacity: "0.2"}, 200)
    $('footer').animate({opacity: "0.2"}, 200)
    $('.signIn').css({
        display: "block",
        width: "0%"
    })
    $( ".signIn" ).animate({
        width: "40%"
    }, 400)
    $('body').css({'overflow': 'hidden'})

    $('.signInLink').css({opacity: '1'})
    $('.signUpLink').css({opacity: '0.5'})

    $('.signInLink').click(() =>{
        if ($('.signUpLink').css('opacity') == 1) {
            $('.signUp').animate({
                display: "block",
                width: "0%"
                }, 400)
            openSignIn()
            $('.signInLink').css({opacity: '1'})
            $('.signUpLink').css({opacity: '0.5'})
        }
        else return
    })
    
    $('.signUpLink').click(() =>{
        if ($('.signInLink').css('opacity') == 1) {
            function openSignUp(){
                $('.signIn').animate({
                    display: "block",
                    width: "0%"
                    }, 400)
                $('.signUp').css({
                    display: "block",
                    width: "0%"
                })
                $( ".signUp" ).animate({
                    width: "40%"
                }, 400)
                $('body').css({'overflow': 'hidden'})
            
                $('.signUpLink').css({opacity: '1'})}
            openSignUp()
            $('.signUpLink').css({opacity: '1'})
            $('.signInLink').css({opacity: '0.5'})
        }
        else return
    })
})


$('#close-signIn').click(() => {
    $('.header').animate({opacity: "1"}, 200)
    $('main').animate({opacity: "1"}, 200)
    $('footer').animate({opacity: "1"}, 200)
    $( ".signIn" ).animate({
        width: "0%"
    }, 400)
    $('.signIn').css({
        display: "none",
    })
    $('body').css({'overflow-y': 'scroll'})
})

$('#close-signUp').click(() => {
    $('.header').animate({opacity: "1"}, 200)
    $('main').animate({opacity: "1"}, 200)
    $('footer').animate({opacity: "1"}, 200)
    $( ".signUp" ).animate({
        width: "0%"
    }, 400)
    $('.signUp').css({
        display: "none",
    })
    $('body').css({'overflow-y': 'scroll'})
})


$('#btn-signIn').click(function(e){
    localStorage.setItem('login', $('#loginIn').val())
    $('#close-signIn').trigger('click')
    if (localStorage.getItem('login') != null){
        $('#promo-menu').css({display: 'none'})
        $('#signIn-menu').css({display: 'none'})
        $('.right').append("<div class='personal'><a class='personal-link'><img id='userIcon' src='img/person-circle.svg'></a></div> ")
    
    }
})



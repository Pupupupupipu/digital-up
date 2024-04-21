if (localStorage.getItem('login') != null){
    // $('#promo-menu').css({display: 'none'})
    $('#signIn-menu').css({display: 'none'})
    $('.right').append("<div class='personal'><a class='personal-link'><img id='userIcon' src='img/person-circle.svg'></a></div> ")
}

$('.personal-link').click(function(){
    $('.header').animate({opacity: "0.2"}, 200)
    $('main').animate({opacity: "0.2"}, 200)
    $('footer').animate({opacity: "0.2"}, 200)
    $('.personalSpace').css({
        display: "block",
        width: "0%"
    })

    $('#UserName').text(localStorage.getItem('login'))
    
    $('#subUser').text(localStorage.getItem('nameSub'))
    $( ".personalSpace" ).animate({
        width: "40%"
    }, 400)
    $('body').css({'overflow': 'hidden'})
})

$('.link-sub').click(function(event){
    localStorage.setItem('nameSub', event.target.id)
})

$('#close-personal').click(() => {
    $('.header').animate({opacity: "1"}, 200)
    $('main').animate({opacity: "1"}, 200)
    $('footer').animate({opacity: "1"}, 200)
    $( ".personalSpace" ).animate({
        width: "0%"
    }, 400)
    $('.personalSpace').css({
        display: "none",
    })
    $('body').css({'overflow-y': 'scroll'})
})

$('#exit').click(()=>{
    localStorage.clear()
    $('#close-personal').trigger('click')
    $('.personal').css({display: 'none'})
    $('#signIn-menu').css({display: 'block'})
})
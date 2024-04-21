$('.subs-container').on('mouseover', (function(event){
    let target = event.target.closest('.sub-item')
    $(target).children().children().last().css({
        display: "block"
    })
    $(target).css({
        transform: "translateY(-10px)"
    })
}))

$('.subs-container').on('mouseout', (function(event){
    let target = event.target.closest('.sub-item')
    $(target).css({
            transform: "translateY(0px)"
        })
    $(target).children().children().last().css({
        display: "none"
    })
}))

$('.subs-container').on('mouseover', (function(event){
    let target = event.target.closest('.sub-item-friend')
    $(target).children().children().last().css({
        display: "block"
    })
    $(target).css({
        transform: "translateY(-10px)"
    })
}))

$('.subs-container').on('mouseout', (function(event){
    let target = event.target.closest('.sub-item-friend')
    $(target).css({
            transform: "translateY(0px)"
        })
    $(target).children().children().last().css({
        display: "none"
    })
}))

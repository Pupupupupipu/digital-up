//popular
const  images = document.querySelectorAll('.popular-container .popular-items img')
const sliderLine = document.querySelector('.popular-items')
let count = 0
let width;
width = document.querySelector('.popular-container').offsetWidth;
function init(){
    console.log('calc');
    width = document.querySelector('.popular-container').offsetWidth;
    sliderLine.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width / 4 + 'px'
        item.style.height = 'auto';
    })
    console.log(width)
}

window.addEventListener('resize', init);

document.querySelector('.pnext').addEventListener('click', ()=>{
    count++;
    if (count >= images.length / 4){
        count = 0
    }
    rollslider();
});

document.querySelector('.ppred').addEventListener('click', ()=>{
    count--;
    if (count < 0){
        count = images.length / 4 - 1
    }
    rollslider();
});

function rollslider(){
    sliderLine.style.transform = 'translate(-'+count * width + 'px)';
}

//serials
const  images_ser = document.querySelectorAll('.serials-container .serials-items img')
const sliderLine_ser = document.querySelector('.serials-items')
let count_ser = 0
let width_ser;
width_ser = document.querySelector('.serials-container').offsetWidth;
function init_ser(){
    console.log('calc');
    width_ser = document.querySelector('.serials-container').offsetWidth;
    sliderLine_ser.width = width_ser * images_ser.length + 'px';
    images_ser.forEach(item => {
        item.style.width = width_ser / 4 + 'px'
        item.style.height = 'auto';
    })
    console.log(width)
}

window.addEventListener('resize', init_ser);

document.querySelector('.snext').addEventListener('click', ()=>{
    count_ser++;
    if (count_ser >= images_ser.length / 4){
        count_ser = 0
    }
    rollslider_ser();
});

document.querySelector('.spred').addEventListener('click', ()=>{
    count_ser--;
    if (count_ser < 0){
        count_ser = images_ser.length / 4 - 1
    }
    rollslider_ser();
});

function rollslider_ser(){
    sliderLine_ser.style.transform = 'translate(-'+count_ser * width_ser + 'px)';
}

//horror
//serials
const  images_hor = document.querySelectorAll('.horror-container .horror-items img')
const sliderLine_hor = document.querySelector('.horror-items')
let count_hor = 0
let width_hor;
width_hor = document.querySelector('.horror-container').offsetWidth;
function init_hor(){
    console.log('calc');
    width_hor = document.querySelector('.horror-container').offsetWidth;
    sliderLine_hor.width = width_hor * images_hor.length + 'px';
    images_hor.forEach(item => {
        item.style.width = width_hor / 4 + 'px'
        item.style.height = 'auto';
    })
    console.log(width)
}

window.addEventListener('resize', init_hor);

document.querySelector('.hnext').addEventListener('click', ()=>{
    count_hor++;
    if (count_hor >= images_hor.length / 4){
        count_hor = 0
    }
    rollslider_hor();
});

document.querySelector('.hpred').addEventListener('click', ()=>{
    count_hor--;
    if (count_hor < 0){
        count_hor = images_hor.length / 4 - 1
    }
    rollslider_hor();
});

function rollslider_hor(){
    sliderLine_hor.style.transform = 'translate(-'+count_hor * width_hor + 'px)';
}
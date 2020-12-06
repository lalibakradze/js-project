var home = document.querySelector('.home');
var products = document.querySelector('.products');
var contact = document.querySelector('.contact');
var eyeshadow = document.querySelector('.eyeshadow');
var lips = document.querySelector('.lips');
var skin = document.querySelector('.skin');


document.querySelector('.language').addEventListener('click', function (){
    document.querySelector('.language').textContent = "ENG";
    home.textContent = "მთავარი გვერდი";
    products.textContent = "პროდუქტები";
    contact.textContent = "კონტაქტი";
    eyeshadow.textContent = "ჩრდილები";
    lips.textContent = "ტუჩებისთვის";
    skin.textContent = "კანისთვის";
});


////////slider images///////
const images = ['images/lightpink-glosses.jpg','images/hotpink-glosses.jpg','images/peach-and-clear-glosses.jpg'];
var counter = 0;
document.querySelector('.slider').src = images[0];
document.querySelector('.back').addEventListener('click',function(){
    counter--;
    if (counter < 0){
        counter = images.length-1;
    }
    document.querySelector('.slider').src = images[counter];

});
document.querySelector('.next').addEventListener('click',function(){
    counter++;
    if (counter > images.length - 1){
        counter = 0;
    }
    document.querySelector('.slider').src = images[counter];

});


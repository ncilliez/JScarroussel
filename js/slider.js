'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

class img1 {
    constructor(img, txt) {
      this.img = img;
      this.txt = txt;
    }
}
 
  const uneimg1 = new img1('1.jpg','Colorful Building');
  const uneimg2 = new img1('2.jpg','vfgergjrerg');
  const uneimg3 = new img1('3.jpg','vfgergjrerg');
  const uneimg4 = new img1('4.jpg','vfgergjrerg');
  const uneimg5 = new img1('5.jpg','vfgergjrerg');
  const uneimg6 = new img1('6.jpg','vfgergjrerg');

var mesimages = [uneimg1, uneimg2, uneimg3, uneimg4, uneimg5, uneimg6];
var delai = null;  
var image = document.querySelector('#imgslider');
var caption= document.querySelector('#figslider');
var i=0; 
var random =0;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function next(){
    if (i == mesimages.length-1){
        i=0;
        image.src='/images/'+mesimages[i].img;
        caption.textContent=mesimages[i].txt;
    }
    else{
        image.src='/images/'+mesimages[i+1].img;
        caption.textContent=mesimages[i+1].txt;
        i++;
    }
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

image.src='/images/'+mesimages[i].img;
caption.textContent=mesimages[i].txt;

let btnnext = document.querySelector('.slider-next');
btnnext.addEventListener('click', function(){
    next();
//    console.log(i);
});

let btnprevious = document.querySelector('.slider-previous');
btnprevious.addEventListener('click', function(){
    if (i == 0){
        i=5;
        image.src='/images/'+mesimages[i].img;
        caption.textContent=mesimages[i].txt;
    }
    else{
        i=i-1;
        image.src='/images/'+mesimages[i].img;
        caption.textContent=mesimages[i].txt;
        console.log(i);
    }
});

let btnplay = document.querySelector('.slider-toggle');
btnplay.addEventListener('click', function(){

    let symboleplay = document.querySelector('.play')
    let symbolepause = document.querySelector('.pause')

    symboleplay.classList.toggle('close');
    symbolepause .classList.toggle('open');
 
    if (!delai) {
        delai=setInterval(next, 2000);
    }
    else{
        clearInterval(delai);
        delai=null; 
    }

});

let btnrandom = document.querySelector('.slider-random');
btnrandom.addEventListener('click', function(){

    while (i == random) {
        random = Math.floor(Math.random() * (5 + 1));
    }
    i = random;

    image.src='/images/'+mesimages[i].img;
    caption.textContent=mesimages[i].txt;
 
    console.log(i);
});







$(document).ready(function(){

	$('#toolbar-toggle').click(function(){
        // alert('message');
		( jQuery(this).find('.statut').html() == '<i class="fa-solid fa-arrow-down"></i>' )? jQuery(this).find('.statut').html('<i class="fa-sharp fa-solid fa-arrow-up"></i>') : jQuery(this).find('.statut').html('<i class="fa-solid fa-arrow-down"></i>');
		// $(this).parent().children('.toolbar').first().toggle('speed');
        $('.toolbar').toggleClass('open');
	})
});













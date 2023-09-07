// Находим все элементы <img> с классом "cards-works" на странице
var images = document.querySelectorAll(".cards-works img");

// // Добавляем обработчик события клика для каждой картинки
// for (var i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", function() {
//     window.open(this.parentNode.href , "_blank",  "width="+screen.width+",height="+screen.height, );
//   }  );
// }
  //find elements


var showPrevBtn = document.getElementById("show-prev");
var showNextBtn = document.getElementById("show-next");
var slideImage = document.getElementById("slide-img");

//subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);



//create image array
 var imagesURL = [];
 
 imagesURL.push("../img/work/holl.jpg");
 imagesURL.push("../img/work/dining_green.jpg");
 imagesURL.push("../img/work/dining_ligth.jpg");

 
 var currentImageIndex = 0;
 slideImage.src = imagesURL[currentImageIndex];
 showPrevBtn.disabled = true;
 
 //function definitions
function onShowPrevBtnClick(){
  currentImageIndex --;
  slideImage.src = imagesURL[currentImageIndex];
  showNextBtn.disabled = false;
  if(currentImageIndex === 0){
    showPrevBtn.disabled = true;
  }
  
}

function onShowNextBtnClick(){
  currentImageIndex ++;
  slideImage.src = imagesURL[currentImageIndex];
  showPrevBtn.disabled = false;
  if(currentImageIndex === imagesURL.length-1){
    showNextBtn.disabled = true;
  }
  

} 
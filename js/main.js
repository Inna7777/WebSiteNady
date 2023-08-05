

// Находим все элементы <img> с классом "cards-works" на странице
var images = document.querySelectorAll(".cards-works img");


// Добавляем обработчик события клика для каждой картинки
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    window.open(this.parentNode.href , "_blank",  "width="+screen.width+",height="+screen.height, );
  }  );
}
 
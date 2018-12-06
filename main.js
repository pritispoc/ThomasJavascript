let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  credit = document.querySelector("#abc"),
  current = 0;

  let allItems = document.querySelectorAll(".item"),
  currentItem = 0; 

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function resetItem(slider_id, item_id) {

  for (let j = 0; j <= allItems.length; j++) {
    if (item_id >= 0) {
      let n_item = document.querySelector('.slide-'+slider_id + ' .item-'+(item_id));
      if( n_item ){
           n_item.classList.replace("fadeInLeft" , "fadeOutRight");
        item_id--;
        currentItem--;
      }
    }
  } 
  item_id = 0;
  currentItem = 0;
 
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
  Array.from(allItems).map(item => {
    item.classList.remove("fadeOutRight");
  });
  allItems[0].style.display = "block";
  nextItem(0,0);
  
}


// Show next
function slideRight() {
  
  resetItem(current, currentItem);

  
  setTimeout(function(){
    sliderImages[current].style.display = "none";

    current++;
    sliderImages[current].style.display = "block";
    currentItem = 0;
    nextItem(current, currentItem);
  }, 2000);
  
}

function nextItem(slider_id, item_id) {
  let next_item = document.querySelector('.slide-'+slider_id + ' .item-'+(item_id + 1));
  if( next_item ){
    next_item.classList.add('fadeInLeft');
    currentItem++;
  }
}


// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current == (sliderImages.length - 1)) {
    current = 0;
    currentItem = 0;
    startSlide();
  } else {
    slideRight();
  }
});

// on space bar or right arrow key
document.body.onkeyup = function(event){

  if(event.keyCode == 32 || event.keyCode == 39 ) {
    if (currentItem === allItems.length - 1) {
    currentItem = -1;
    }
    nextItem(current, currentItem);
    }
}


function credits() {
  reset();
  credit.style.display = "block";
}

startSlide();

function restart() {
  console.log('Do i run?');
  credit.style.display = "none";
  current = 0;
  currentItem = 0;
  reset();
  startSlide();
}


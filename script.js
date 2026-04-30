//Interval function

// Timer
// Start at image 1
let currentImage = 1;

let maxImages = 15;

// Start the timer AFTER the page loads
window.onload = function () {
    timeChange();
};

//Timer function to change the image every second
function timeChange() {
     setInterval(changeImage, 3000); //change every 3000 milliseconds (3 seconds)
} 

// Image function
function changeImage() {
//increment the image number by 1
  
    currentImage ++; 
//if the image number exceeds the total number of images, reset to the first image
    if (currentImage > maxImages) { 
        currentImage = 1;
    }
  
//change the image source to the new image
    document.getElementById("container").src = currentImage + ".JPG"; 
}
timeChange();



document.querySelectorAll(".tool-checklist input[type='checkbox']")
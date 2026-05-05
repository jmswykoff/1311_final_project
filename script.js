// Image settings
let currentImage = 1;
let maxImages = 15;

// Start rotation AFTER the page loads
window.onload = function () {
    timeChange();
};

//Timer function to change the image every second
function timeChange() {
     setInterval(changeImage, 2000); //change every 2 seconds
} 
// Image function
function changeImage() {
    currentImage ++;
    
    if (currentImage > maxImages) { 
        currentImage = 1;
    }
  
//change the image source to the new image
    document.getElementById("container").src = currentImage + ".JPG"; 
}


// Tool checklist reset
document.getElementById("reset-tools").addEventListener("click", () => {
                    document.querySelectorAll(".tool-checklist input[type='checkbox']").forEach(box => {
                        box.checked = false;
                    });
                });

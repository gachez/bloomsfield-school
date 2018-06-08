//
const navbar = document.getElementById("navbar");
const togglebutton = document.querySelector("h4");
const logo = document.getElementById("logohead");
var x = window.matchMedia("(min-width: 920px)");

//code for slider
var slider_content = document.getElementById("box");

    //images within array
 var image = [ "images/ballet", "images/music"];
 var i = image.length;

    //next slide
function nextImg (){
    if(i < image.length){
        
        i++;
    }
    else {
        i =1;
    }
    slider_content.innerHTML = "<img  src =" + image[i - 1] + ".jpg>";
  //  slider_content.innerHTML = "<h1 class = "img-tag">Where children learn to love and love to learn</h1>";
}

// for prev slide
function prevImg (){
    if (i < image.length +1 && i > 1){
        i++;
    }
    else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src =" + image[i-1] + ".jpg>";
}

// code for responsive navbar
togglebutton.addEventListener('click' , () => {
    
    if (navbar.style.display === "none")
    {
        navbar.style.display = "grid";
        
        logo.style.display = "none";
        togglebutton.textContent = "Close";
    }
    
    
    
    else {
        navbar.style.display= "none";
        togglebutton.textContent = "Menu";
            if (x.matches){
                
                navbar.style.display = "block";
                logo.style.display = "block"; 
            }
        else {
            navbar.style.display = "none";
        }
    }
})


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

//slide 2

var image = document.getElementById('modal1');
var thumb = document.getElementById('myImg2');
var span1 = document.getElementsByClassName("close1")[0];

    thumb.addEventListener ('click', () => {
        image.style.display = "block";
            if(image.style.display ==="block") {
                span1.addEventListener('click', () => {
                    image.style.display = "none";
                })
            }
    })
    
    
var image1 = document.getElementById('modal2');
var thumb2 = document.getElementById('myImg3');
var span2 = document.getElementsByClassName("close2")[0];

    thumb2.addEventListener('click', () => {
        image1.style.display = "block";
            if(image1.style.display ==="block"){
                span2.addEventListener('click', () => {
                    image1.style.display = "none";
                })
            }
        
    })
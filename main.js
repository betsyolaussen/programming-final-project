
document.documentElement.className += ' js';

/*menu function on home page*/

function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("move").style.marginLeft = "30%";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("move").style.marginLeft= "0";
}

// Get the modal
var modal = document.getElementById('myModal');

var img = $('.myImg');
var modalImg = $("#modal-image");
var captionText = document.getElementById("caption");
img.click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


 var vm = new Vue({
  el: '#nav',
  data: {
    active: 'home'
  },
  methods: {
    makeActive: function(item){
        this.active = item;
    }
  }
})

/*menu function on home page*/
var navButton = document.querySelector('.nav-icon')
navButton.addEventListener('click', function() {
    console.log('clicky!!!');
    document.querySelector('body')
    .classList
    .toggle('nav-open');
});

var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click',
    function(){
        console.log('close it!');
    document
        .querySelector('body')
        .classList
        .toggle('nav-open');
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('bath_bomb1');
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

// Get the modal 2
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('bath_bomb2');
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



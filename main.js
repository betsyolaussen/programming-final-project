// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false;
    return {
      images: [
        {
          title: 'image 1',
          url: 'bathbombs/beachbomb.jpg'
        },
        {
          title: 'image 2',
          url: 'bathbombs/cakebomb.jpg'
        },
        {
          title: 'image 3',
          url: 'bathbombs/cozybomb.jpg'
        },
        {
          title: 'image 4',
          url: 'bathbombs/fbomb.jpg'
        },
        {
          title: 'image 5',
          url: 'bathbombs/jinglebomb.jpg'
        },
        {
          title: 'image 6',
          url: 'bathbombs/santabomb.jpg'
        },
        {
          title: 'image 7',
          url: 'bathbombs/snowball.jpg'
        },
        {
          title: 'image 8',
          url: 'bathbombs/treasurebomb.jpg'
        },
        {
          title: 'image 9',
          url: 'bathbombs/blingbomb.jpg'
        },
        {
          title: 'image 10',
          url: 'bathbombs/bugbomb.jpg'
        },
        {
          title: 'image 11',
          url: 'bathbombs/candybomb.jpg'
        },
        {
          title: 'image 12',
          url: 'bathbombs/cherrybomb.jpg'
        },
        {
          title: 'image 13',
          url: 'bathbombs/earthbomb.jpg'
        },
        {
          title: 'image 14',
          url: 'bathbombs/fortunebomb.jpg'
        },
        {
          title: 'image 15',
          url: 'bathbombs/galaxybomb.jpg'
        },
        {
          title: 'image 16',
          url: 'bathbombs/groovybomb.jpg'
        },
        {
          title: 'image 17',
          url: 'bathbombs/herobomb.jpg'
        },
        {
          title: 'image 18',
          url: 'bathbombs/lovebomb.jpg'
        },
        {
          title: 'image 19',
          url: 'bathbombs/ninjabomb.jpg'
        },
        {
          title: 'image 20',
          url: 'bathbombs/partybomb.jpg'
        },
        {
          title: 'image 21',
          url: 'bathbombs/quotebomb.jpg'
        },
        {
          title: 'image 22',
          url: 'bathbombs/spookybomb.jpg'
        },
        {
          title: 'image 23',
          url: 'bathbombs/sportybomb.jpg'
        },
        {
          title: 'image 24',
          url: 'bathbombs/treasurebomb.jpg'
        }
      ]
    }
  },
})

/*menu function on home page*/


function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "150px";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

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



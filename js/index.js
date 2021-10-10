const _ = (selector) => {
 return document.querySelector(selector);
};

const __ = (selector) => {
 return document.querySelectorAll(selector);
};

var listContainer = _("#nav-links");
var list = listContainer.getElementsByClassName("nav-link");

for (let i = 0; i < list.length; i++) {

 list[i].addEventListener("click", function (e) {
  if (!e.target.parentElement.id) logQuick.style.display = 'none'
  var current = document.getElementsByClassName("active");

  // If there's no active class
  if (current.length > 0) {
   current[0].className = current[0].className.replace(" active", "");

  }

  // Add the active class to the current/clicked button
  this.className += " active";
 });
}

gsap.from('.step', { opacity: 0, duration: 1, y: -180, stagger: 0.5 });
gsap.from('aside', { opacity: 0, duration: 1, x: -270, delay: 3.5 });
gsap.from('.step2', { opacity: 0, duration: 1.5, x: -270, delay: 2.5 })


const slider2 = tns({
 container: '.swiper-wrapper',
 items: 3,
 slideBy: 'page',
 nav: false,
 autoplay: true,
 speed: 3000,
 autoplayButtonOutput: false,
 animateIn: 'fadeIn',
 animateOut: 'fadeOut',
 autoplayHoverPause: true,
 mouseDrag: true,
 controls: false,
 responsive: {
  300: {
   items: 1
  },
  390: {
   items: 2
  },
  500: {
   items: 2
  },
  640: {
   edgePadding: 20,
   gutter: 20,
   items: 3
  },
  700: {
   gutter: 30
  },
  900: {
   items: 4
  }
 }
})



function maps(lat, lng, location) {

 document.getElementById('map').innerHTML = "<div id='innermap' style='width: 100%; height: 100%;'></div>";
 //map
 let map = L.map('innermap').setView([lat, lng], 7);

 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidmVycmVhdXhibGFjayIsImEiOiJja3Fyem14aTcxY3cxMnhxaHAwb25sMGN5In0.Xc32_sTWg7mlqcGm_qoMxw'
 }).addTo(map);
 L.marker([lat, lng])
  .addTo(map)
  .bindPopup(location)
  .openPopup();
}

maps(6.459964, 7.548949, 'Enugu')


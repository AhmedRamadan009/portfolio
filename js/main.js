
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
let angora =document.getElementById("angora")
let movie =document.getElementById("movie")
let Weather =document.getElementById("Weather")
let crud=document.getElementById("crud")
let dev=document.getElementById("dev")
let simone=document.getElementById("simone")
let noax=document.getElementById("noax")
let notes=document.getElementById("notes")


movie.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/Moviebest/")
})
Weather.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/Weather-App/")
})


crud.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/Products-CRUD/")
})
dev.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/DevFlio/")
})
simone.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/Simone/")
})


angora.addEventListener("click",function(){
  window.open("https://ahmedramadan009.github.io/Angora/")
})
noax.addEventListener("click",function(){
  window.open("https://noax.vercel.app/home")
})

notes.addEventListener("click",function(){
  window.open("https://notes-app-drab-kappa.vercel.app/#/home")
})

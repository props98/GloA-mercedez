'use strict';

(function() {

  const linksHead = document.querySelectorAll('.menu-list__link'),
        mainScroll = document.querySelector('.main__scroll');

  // Spread Оператор
  const newArray = [...linksHead, mainScroll];


  newArray.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      const ID = evt.target.getAttribute('href').substr(1);

      document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    });
  });

}());

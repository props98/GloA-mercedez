'use strict';

(function(){

  const menu = document.querySelector('.menu'),
        burger = document.querySelector('.humburger-menu');

  const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
    menu.style.position = 'fixed';
  };

  burger.addEventListener('click', () => toggleMenu());

  // menu.addEventListener('click', (evt) => {
  //   const evtTarget = evt.target;
  //   console.log(evtTarget);


  // })

}());

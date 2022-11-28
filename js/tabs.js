'use strict';

(function() {

  const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
        tabsContentElems = document.querySelectorAll('[data-tabs-field]'),
        designTitle = document.querySelectorAll('.design__title');

console.log(designTitle);

  for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {

      tabsHandlerElems.forEach(item => {
        item.classList.remove('design-list__item_active');
        btn.classList.add('design-list__item_active');



        tabsContentElems.forEach(content => {
          if (content.dataset.tabsField === btn.dataset.tabsHandler) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });

      });

      // designTitle.forEach(title => {
      //   title.classList.toggle('hidden')
      // })



    });
  }


}());

'use strict';

(function() {

  const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
        tabsContentElems = document.querySelectorAll('[data-tabs-field]'),
        designTitle = document.querySelectorAll('.design__title');

console.log(designTitle);

  tabsHandlerElems.forEach((tab, tabIndex) => {

    tab.addEventListener('click', () => {
      tabsHandlerElems.forEach(item => {
        item.classList.remove('design-list__item_active');
        tab.classList.add('design-list__item_active');

        tabsContentElems.forEach(content => {
          if (content.dataset.tabsField === tab.dataset.tabsHandler) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });

        designTitle.forEach((title, titleIndex) => {
          title.classList.add('hidden');
          if (tabIndex === titleIndex) {
            title.classList.remove('hidden');
          }
        });

      });

      //Todo: HoweWork
      // designTitle.forEach(title => {
      //   title.classList.toggle('hidden')
      // })

    });

  });

}());

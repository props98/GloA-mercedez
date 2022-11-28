'use stirct';

(function() {

  const btns = document.querySelectorAll('.feature__link'),
        lists = document.querySelectorAll('.feature-sub');

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // btns.forEach(btn => {
      //   btn.classList.remove('feature__link_active');
      // });
      // btn.classList.add('feature__link_active');

      // lists.forEach(list => {
      //   if (btn.classList.contains('feature__link_active')) {
      //     lists[index].classList.remove('hidden');
      //   } else {
      //     list.classList.add('hidden');
      //   }
      // });

      btn.classList.toggle('feature__link_active');
      lists[index].classList.toggle('hidden');

    });
  });


}());

'use stirct';

(function() {

  const btns = document.querySelectorAll('.feature__link'),
        lists = document.querySelectorAll('.feature-sub');

  // btn.addEventListener('click', () => {
  //   console.log('click btn');
  // });

  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener('click', () => console.log(btns[i]));
  // }

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => {
        btn.classList.remove('feature__link_active');
      });

      btn.classList.add('feature__link_active');

      lists.forEach(list => {
        list.classList.add('hidden');
      });

      lists[index].classList.remove('hidden');

      console.dir(btn);
    });
  });

}());

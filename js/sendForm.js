'use stirct';

(function() {

  const form = document.querySelector('.form-test-drive');


  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let data = {};

    for (let { name, value } of form.elements) {
      if (name) {
        data[name] = value;
      }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)

    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(data => {
      alert('Данные ушли успешно');
      form.reset();
    })
    .catch(error => {
      console.error(`ERROR!!! ${error.message}`);
    })

  })

}());

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const axios = require('axios');

axios.post('http://127.0.0.1:8080/api/users/register', {
    firstName: 'Fred',
    email: 'tosin@gmail.com',
    password: 'Password5$'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

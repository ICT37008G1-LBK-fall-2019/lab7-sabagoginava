const axios = require('axios');
var $ = require('jquery');
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});

const HelloWorld = (x) => {
  $('body').css('background','black');
}
HelloWorld();
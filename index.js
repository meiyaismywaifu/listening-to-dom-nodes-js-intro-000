var test = "testvalue";
// stuff doesn't get read after an error, apparently.
// the below is in error

const main = document.getElementById('main');
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

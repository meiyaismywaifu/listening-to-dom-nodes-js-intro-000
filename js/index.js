var test = "testvalue";
// stuff doesn't get read after an error, apparently.
// the below is in error.
// probably because "document" is an HTML function.
var main = document.getElementById("main");
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

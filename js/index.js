var test = "testvalue";
// stuff doesn't get read after an error, apparently.
// below not in error anymore after figuring out where to put this in the HTML.

var main = document.getElementById("main");
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

var input = document.querySelector('input');
input.addEventListener('keydown', function(internalVar) {
  if (internalVar.key === "g"){
    return g.preventDefault();
  } else {
      console.log(internalVar.key);
  }
  
});

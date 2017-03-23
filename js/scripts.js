// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));
//
//   if (age >= 21) {
//     $('#drinks').show();
//   }
// })

// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));
//
//   if (age > 21) {
//     $('#drinks').show();}
//   else if (age === 21) {
//     alert("Ok you're 'of age', but don't go crazy honey.");
//     $('#drinks').show();}
//   else {
//     $('#under-21').show();}
// });

$(document).ready(function() {
  var over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

  if (over21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});

// Quand l'utilisateur déscend de 50 pixels, le header rétrécie et devient transparent
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.top = "5%";
  } else {
    document.getElementById("header").style.top = "10%";
  }
}
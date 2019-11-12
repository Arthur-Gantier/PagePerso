// Quand l'utilisateur déscend de 50 pixels, le header rétrécie et devient transparent
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
    document.getElementById("header").style.backgroundColor = "rgba(247, 247, 247, .5)";
    document.getElementById("logo").style.width = "5%";
  } else {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.backgroundColor = "rgba(247, 247, 247, 1)";
    document.getElementById("logo").style.width = "10%";
  }
}
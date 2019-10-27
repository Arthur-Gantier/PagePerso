// Quand l'utilisateur déscend de 50 pixels, le header rétrécie et devient transparent
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.backgroundColor = "rgba(247, 247, 247, 0.3)";
  } else {
    document.getElementById("header").style.fontSize = "90px";
    document.getElementById("header").style.backgroundColor = "rgba(247, 247, 247, 1)";
  }
}



// Le menu s'ouvre lorsqu'un utilisateur clique sur le logo...
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// ... et se ferme lorsque l'on appuie sur la croix
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Change le bouton 'play' en 'pause' au clic et inversement
$ = function(){};
$(
  function(){
  var aud = $('audio')[0];
  $('.play-pause').on('click', function(){
  if (aud.paused) {
    aud.play();
    $('.play-pause').removeClass('icon-play');
    $('.play-pause').addClass('icon-stop');
  }
  else {
    aud.pause();
    $('.play-pause').removeClass('icon-stop');
    $('.play-pause').addClass('icon-play');
  }
  
})
  $('.next').on('click', function(){
  aud.src = 'another audio source';
})
  aud.ontimeupdate = function(){
    $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
  }
})



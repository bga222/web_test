// Obtener el botón
let mybutton = document.getElementById("myBtn");

window.addEventListener('scroll', function() {
  var button = document.getElementById('myBtn'); // Asegúrate de usar el id correcto
  if (window.scrollY < 280) {
      button.style.display = 'none';
  } else {
      button.style.display = 'flex';
  }
});


// Cuando el usuario haga clic en el botón, subir al principio del documento
function topFunction() {
  document.body.scrollTop = 568940; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

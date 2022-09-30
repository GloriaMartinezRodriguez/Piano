window.onload = () => {
    //buscar todos los div con la clase tecla y los guardaremos en la variable Teclas
   var teclas = document.querySelectorAll('.tecla');

    //iteramos cada tecla 
    teclas.forEach(function(tecla){
        tecla.addEventListener('click', function() {
            var nota = this.getAttribute('data-note');
            playNote(nota);
        });
    });

    function playNote(nota){
        var audio = new Audio('sounds/' + nota + '.mp3');
        audio.play();//reproduce el audio
    }
}
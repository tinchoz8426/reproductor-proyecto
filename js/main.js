const playSong = document.getElementsByClassName('listado-canciones__play');
const stopSong = document.getElementsByClassName('listado-canciones__stop');
const volumen = document.querySelector('.volumen');

let audio;

//Metodo 1 para recorrer el Array de playSong
/* for (const element of playSong) {
    element.addEventListener('click', function () {
        let cancion = this.getAttribute("id");
        audio = new Audio(`../assets/audio/${cancion}.mp3`);
        audio.play();
    })
} */

//Metodo 2 para recorrer el Array de playSong (se debe primero transformar con el spread operator)
[...playSong].forEach(element => {
    element.addEventListener('click', function () {
        let cancion = this.getAttribute("id");
        audio = new Audio(`../assets/audio/${cancion}.mp3`);
        audio.play();
    })
});

//Pausa la cancion
[...stopSong].forEach(element => {
    element.addEventListener('click', function () {
        audio.pause();
    })
});


//Volumen
volumen.addEventListener('click', function () {
    let volumenActual = this.value;
    audio.volume = volumenActual;
})
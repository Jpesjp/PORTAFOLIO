const audio = document.getElementById("miAudio");

function reproducirAudio() {
  audio.play();
}

function pausarAudio() {
  audio.pause();
}

const elementosAnimados = document.querySelectorAll(".seccion, .card, .proyecto");

elementosAnimados.forEach((elemento) => {
  elemento.classList.add("animado");
});

function mostrarElementos() {
  elementosAnimados.forEach((elemento) => {
    const posicion = elemento.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (posicion < alturaPantalla - 100) {
      elemento.classList.add("mostrar");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);

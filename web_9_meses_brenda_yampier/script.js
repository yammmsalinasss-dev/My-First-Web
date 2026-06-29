const FECHA_INICIO = new Date(2025, 8, 29, 0, 0, 0);
const musicaFondo = document.getElementById("musicaFondo");
const musicaEspecial = document.getElementById("musicaEspecial");
const pantallaInicio = document.getElementById("pantallaInicio");
const app = document.getElementById("app");
const btnEntrar = document.getElementById("btnEntrar");
const btnMusica = document.getElementById("btnMusica");
const btnEspecial = document.getElementById("btnEspecial");
const btnSecreto = document.getElementById("btnSecreto");
const modal = document.getElementById("modal");
const modalContenido = document.getElementById("modalContenido");
const cerrarModal = document.getElementById("cerrarModal");

let musicaActivada = false;

const mesesHistoria = [
  {
    mes: "Mes 1",
    titulo: "Rosas, cartas y tres mil millones",
    texto: "El primer ramo de rosas, una carta de ocho páginas, la carta donde nació nuestro “tres mil millones”, las manos que no querían separarse y ese primer cumple mes comiendo pasta antes de una operación."
  },
  {
    mes: "Mes 2",
    titulo: "Lealtad en un mes difícil",
    texto: "Fue un mes duro, pero también fue el mes donde más sentí tu compañía. Fuiste hasta Trujillo, me acompañaste y me demostraste una lealtad que nunca voy a olvidar."
  },
  {
    mes: "Mes 3",
    titulo: "Volver a vernos",
    texto: "Empecé a recuperarme, estudié bastante y tú estuviste conmigo moralmente. Nos volvimos a ver, compramos poleras goals de Navidad, desayunamos café con pan con chicharrón y grabamos muchos recuerdos."
  },
  {
    mes: "Mes 4",
    titulo: "Makis, orgullo y momentos fuertes",
    texto: "Probamos makis en Imperio Wok, no fueron los mejores, pero la risa sí. También te vi con tu uniforme y tu solapero dorado, y sentí mucho orgullo por ti. Fue un mes de paseos, cumpleaños y compañía en días difíciles."
  },
  {
    mes: "Mes 5",
    titulo: "Inglés, sol y cuadritos",
    texto: "Empezamos inglés juntos los fines de semana, salíamos aunque el calor estuviera insoportable, volvimos al Vivero, nos subimos a juegos y pintamos dos cuadros. El que me hiciste se quedó en mi cuarto."
  },
  {
    mes: "Mes 6",
    titulo: "Vacaciones, skincare y San Valentín",
    texto: "Viniste más seguido a mi casa e hicimos cosas simples que se sentían enormes: skincare, dibujos, tiktoks y paseos después de inglés. El 14 de febrero hubo rosas, pizza hawaiana y hasta dos impresoras."
  },
  {
    mes: "Mes 7",
    titulo: "Barcelona goals",
    texto: "Me compraste un polo de Barcelona y no sabía cómo reaccionar. Fue un detalle demasiado acertado. Después hicimos match, paseamos y tú seguiste haciendo eso que me encanta: grabar y guardar todo."
  },
  {
    mes: "Mes 8",
    titulo: "Cine, Starbucks y ropa formal",
    texto: "Fuimos a ver la película de Michael Jackson, paseamos por MegaPlaza, probamos Starbucks y salimos con ropa formal, bien wapos, como si el día también quisiera salir bonito."
  },
  {
    mes: "Mes 9",
    titulo: "Crepes y una pancita sin espacio",
    texto: "Por fin fuimos al lugar de crepes con temática de Hello Kitty, algo que veníamos postergando desde hace mucho. Volvimos a comer crepes, paseamos, nos tomamos fotos en Aruma y seguimos sumando recuerdos."
  }
];

const fotos = [
  ["foto01.jpg", "El inicio de una historia Dorada<3"],
  ["foto02.jpg", "Una Flor para otra bella flor :)"],
  ["foto03.jpg", "que sería de mí sin ti miamor"],
  ["foto04.jpg", "la comida de los dioses"],
  ["foto05.jpg", "Prometo estar contigo en la salud y la enfermedad."],
  ["foto06.jpg", "esos recuerdos preciosos<3"],
  ["foto07.jpg", "cuando quisimos probar makis XD jurabamos que iban a estar ricos"],
  ["foto08.jpg", "Me encanta cómo nos vemos cuando estamos juntos."],
  ["foto09.jpg", "Una prueba más de que contigo todo se siente más lindo."],
  ["foto10.jpg", "Esta foto tiene algo que me encanta."],
  ["foto11.jpg", "Un recuerdo que quiero guardar por mucho tiempo, Miss Abanto <3."],
  ["foto12.jpg", "Nosotros siendo nosotros."],
  ["foto13.jpg", "Una fotito que vale más de lo que parece."],
  ["foto14.jpg", "Me gusta verte, pero me gusta más verte conmigo."],
  ["foto15.jpg", "Otro pedacito de nuestra historia un 14 de febrero <3."],
  ["foto16.jpg", "Contigo hasta lo cotidiano se vuelve bonito."],
  ["foto17.jpg", "Una Miss Universo <3"],
  ["foto18.jpg", "Tú, yo y esa forma tan nuestra de querernos."],
  ["foto19.jpg", "te amor tanto miamor "],
  ["foto20.jpg", "te amo muchisimo amor<3"]
];

const cartas = {
  carta1: {
    titulo: "Gracias por quedarte",
    texto: "Gracias por acompañarme incluso cuando el mes no fue fácil. Gracias por ir, por estar, por no hacer que me sintiera solo y por demostrarme con acciones que tu cariño no era solo de palabras. Eso se quedó guardado en una parte muy importante de mí."
  },
  carta2: {
    titulo: "Lo que amo de ti",
    texto: "Amo tus pequitas, tus gestos tiernos, tu forma de emocionarte por una salida, por una foto o por un plan pequeño. Amo que grabes todo, que conviertas los días simples en recuerdos, que seas sentimental y que aun así tengas esa forma tan bonita de hacerme reír."
  },
  carta3: {
    titulo: "Promesa",
    texto: "Prometo cuidar lo que estamos construyendo. Prometo seguir aprendiendo a quererte mejor, escucharte más, apoyarte siempre que pueda y no olvidar que lo nuestro también se cuida en los detalles pequeños: una carta, una rosa, una caminata, una comida compartida o una frente chocando suavemente con la otra."
  }
};

const cajitas = [
  "Amo tus pequitas, porque para mí son una de las partes más bonitas de tu carita.",
  "Me gusta que seamos Bubbalo y Trident: pegados, pero de una forma tierna.",
  "Gracias por enseñarme que confiar plenamente en alguien también puede sentirse seguro.",
  "Nunca voy a olvidar que estuviste conmigo cuando mi salud me puso a prueba.",
  "Me encanta que grabes todo, porque tú haces que hasta lo simple parezca importante.",
  "Te amo tres mil millones. Y todavía falta contar todo lo que viene."
];

function intentarReproducirMusica() {
  if (musicaActivada) return;
  musicaFondo.volume = 0.22;
  musicaFondo.play()
    .then(() => {
      musicaActivada = true;
      btnMusica.textContent = "❚❚";
    })
    .catch(() => {
      btnMusica.textContent = "♫";
    });
}

document.addEventListener("pointerdown", intentarReproducirMusica, { once: true });

btnEntrar.addEventListener("click", () => {
  pantallaInicio.classList.add("oculto");
  app.classList.remove("oculto");
  intentarReproducirMusica();
  lanzarCorazones(18);
});

btnMusica.addEventListener("click", (e) => {
  e.stopPropagation();
  if (musicaFondo.paused) {
    musicaFondo.play();
    btnMusica.textContent = "❚❚";
  } else {
    musicaFondo.pause();
    btnMusica.textContent = "♫";
  }
});

btnEspecial.addEventListener("click", () => {
  if (musicaEspecial.paused) {
    musicaEspecial.volume = 0.35;
    musicaEspecial.play();
    btnEspecial.textContent = "Pausar canción especial";
  } else {
    musicaEspecial.pause();
    btnEspecial.textContent = "Reproducir canción especial";
  }
});

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;

    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    document.querySelectorAll(".page").forEach(seccion => seccion.classList.remove("activo"));
    document.getElementById(page).classList.add("activo");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

function actualizarContador() {
  const ahora = new Date();

  let meses = (ahora.getFullYear() - FECHA_INICIO.getFullYear()) * 12;
  meses += ahora.getMonth() - FECHA_INICIO.getMonth();

  let fechaBase = new Date(FECHA_INICIO);
  fechaBase.setMonth(FECHA_INICIO.getMonth() + meses);

  if (fechaBase > ahora) {
    meses--;
    fechaBase = new Date(FECHA_INICIO);
    fechaBase.setMonth(FECHA_INICIO.getMonth() + meses);
  }

  let diferencia = ahora - fechaBase;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  diferencia -= dias * 1000 * 60 * 60 * 24;

  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  diferencia -= horas * 1000 * 60 * 60;

  const minutos = Math.floor(diferencia / (1000 * 60));
  diferencia -= minutos * 1000 * 60;

  const segundos = Math.floor(diferencia / 1000);

  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

function cargarTimeline() {
  const contenedor = document.getElementById("lineaTiempo");
  contenedor.innerHTML = "";

  mesesHistoria.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "mes-card";
    card.dataset.mes = String(index + 1).padStart(2, "0");
    card.innerHTML = `
      <h3>${item.mes}: ${item.titulo}</h3>
      <p>${item.texto}</p>
    `;
    contenedor.appendChild(card);
  });
}

function cargarGaleria() {
  const contenedor = document.getElementById("galeria");
  contenedor.innerHTML = "";

  fotos.forEach(([archivo, frase], index) => {
    const btn = document.createElement("button");
    btn.className = "foto-card";

    const ruta = `assets/fotos/${archivo}`;
    btn.innerHTML = `
      <img src="${ruta}" alt="Recuerdo ${index + 1} de Yampier y Brenda" loading="lazy">
      <p>${frase}</p>
    `;

    const img = btn.querySelector("img");
    img.onerror = () => {
      img.remove();
      btn.classList.add("sin-foto");
    };

    btn.addEventListener("click", () => {
      abrirModal(`
        <img src="${ruta}" alt="Recuerdo ${index + 1}">
        <h3>${frase}</h3>
      `);
    });

    contenedor.appendChild(btn);
  });
}

function cargarSobres() {
  document.querySelectorAll(".sobre").forEach(sobre => {
    sobre.addEventListener("click", () => {
      const id = sobre.dataset.carta;
      const carta = cartas[id];
      const caja = document.getElementById("cartaAbierta");

      caja.classList.remove("oculto");
      caja.innerHTML = `<h3>${carta.titulo}</h3><p>${carta.texto}</p>`;
      caja.scrollIntoView({ behavior: "smooth", block: "center" });
      lanzarCorazones(8);
    });
  });
}

function cargarJuego() {
  const contenedor = document.getElementById("juego");
  contenedor.innerHTML = "";

  cajitas.forEach((texto, index) => {
    const btn = document.createElement("button");
    btn.className = "cajita";
    btn.textContent = `Cajita ${index + 1}`;

    btn.addEventListener("click", () => {
      btn.textContent = texto;
      btn.classList.add("revelada");
    });

    contenedor.appendChild(btn);
  });
}

function abrirModal(html) {
  modalContenido.innerHTML = html;
  modal.classList.remove("oculto");
}

function cerrarModalFn() {
  modal.classList.add("oculto");
  modalContenido.innerHTML = "";
}

cerrarModal.addEventListener("click", cerrarModalFn);
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModalFn();
});

btnSecreto.addEventListener("click", () => {
  abrirModal(`
    <p class="mini-etiqueta">Botón secreto</p>
    <h2>Mi Bubbalo</h2>
    <p>
      No sé exactamente en qué momento dejamos de ser solo dos personas hablando todos los días,
      pero sí sé que, desde que llegaste, muchas cosas se sienten más bonitas.
    </p>
    <h3>Te amo tres mil millones.</h3>
  `);
  lanzarCorazones(25);
});

document.getElementById("btnFinal").addEventListener("click", () => {
  abrirModal(`
    <p class="mini-etiqueta">Final</p>
    <h2>¿Seguimos construyendo recuerdos?</h2>
    <p>
      Yo sí quiero. Con salidas, cartas, risas, chismes, emotes, pizza hawaiana,
      crepes, rosas y todo lo que venga.
    </p>
    <h3>Con amor, tu Trident.</h3>
  `);
  lanzarCorazones(40);
});

function lanzarCorazones(cantidad = 15) {
  const capa = document.createElement("div");
  capa.className = "corazones";
  document.body.appendChild(capa);

  for (let i = 0; i < cantidad; i++) {
    const corazon = document.createElement("span");
    corazon.className = "corazon";
    corazon.textContent = ["♡", "♥", "✦"][Math.floor(Math.random() * 3)];
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDelay = Math.random() * 0.9 + "s";
    corazon.style.fontSize = (16 + Math.random() * 22) + "px";
    capa.appendChild(corazon);
  }

  setTimeout(() => capa.remove(), 4300);
}

cargarTimeline();
cargarGaleria();
cargarSobres();
cargarJuego();

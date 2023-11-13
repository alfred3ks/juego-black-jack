// Patron Módulo con una función que se auto invoca:
(() => {
  ('use strict');
  // Referencias del HTML:
  const btnPedir = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const btnNuevo = document.querySelector('#btnNuevo');
  let puntos = document.querySelectorAll('small');
  const divCartasJugador = document.querySelector('#jugador-cartas');
  const divCartasComputadora = document.querySelector('#computadora-cartas');

  let deck = [];
  const tiposDeCartas = ['C', 'D', 'H', 'S'];
  const cartasEspeciales = ['A', 'J', 'Q', 'K'];

  let puntosJugador = 0;
  let puntosComputadora = 0;

  // Creamos una nueva baraja:
  const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCartas) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tiposDeCartas) {
      for (let especial of cartasEspeciales) {
        deck.push(especial + tipo);
      }
    }
    deck = _.shuffle(deck);
    return deck;
  };

  createDeck();

  // Esta funcion me permite tomar una carta:
  // Tomamos un carta del monton y la devolvemos y la quitamos del monton:
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay carta en el deck';
    }
    const carta = deck.pop();
    return carta;
  };

  // Funcion que saca la carta que viene:
  const valorDeLacarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor);
  };

  // Turno de la computadora:
  const turnoComputadora = (puntosMinimos) => {
    do {
      // Tomamos una carta:
      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorDeLacarta(carta);
      puntos[1].innerText = puntosComputadora;

      // Mostramos la carta en el HTML:
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasComputadora.append(imgCarta);
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert('Empate, nadie gana. 😂');
      } else if (puntosMinimos > 21) {
        alert('Gana computadora.');
      } else if (puntosComputadora > 21) {
        alert('Jugador gana. 😎');
      } else if (
        puntosMinimos < puntosComputadora &&
        puntosComputadora === 21
      ) {
        alert('Gana computadora, 21 Black Jack!!!');
      } else if (puntosMinimos < puntosComputadora) {
        alert('Gana computadora.🤡');
      }
    }, 100);
  };

  // Evento click de los botones:
  btnPedir.addEventListener('click', () => {
    // Tomamos una carta:
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorDeLacarta(carta);
    puntos[0].innerText = puntosJugador;

    // Mostramos la carta en el HTML:
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    // Evaluamos la condición si gana o pierde:
    if (puntosJugador > 21) {
      setTimeout(() => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        btnDetener.classList.toggle('disabled');
        btnPedir.classList.toggle('disabled');
        alert('Superaste 21, la computadora gana.');
      }, 100);
    } else if (puntosJugador === 21) {
      setTimeout(() => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        btnDetener.classList.toggle('disabled');
        btnPedir.classList.toggle('disabled');
        alert('Jugador gana, Black Jack!!!');
      }, 100);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    btnDetener.classList.toggle('disabled');
    btnPedir.classList.toggle('disabled');
    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener('click', () => {
    location.reload();
  });
})();

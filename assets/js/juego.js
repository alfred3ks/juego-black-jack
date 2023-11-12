/**
 * "2C two of Clubs"
 * "2D two of Diaminds"
 * "2H two of Hearts"
 * "2S two of Spades"
 */

/*
Generamos las cartas, estas cartas son generadas ordenadas y para desordenarlas usaremos una libreria externa llamada underscore.js.
Usaremos el método .shuffle(), recibe un arreglo como parametro y lo retorna otro arreglo desordenado.
Esta libreria es usada para desordenar el contenido de una array. Vamos a su web y descargamos su version de produccion y lo guardamos en un archivo llamado js/underscore.min.js.
Debe estar desordada ya que cuando se den cartas estas deben ir como cuando barajamos. Luego la importamos en el index.html.
*/

// Referencias del HTML:
const btnPedir = document.querySelector('#btnPedir');
let puntos = document.querySelectorAll('small');

let deck = [];
const tiposDeCartas = ['C', 'D', 'H', 'S'];
const cartasEspeciales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadoras = 0;

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

const valor = valorDeLacarta(pedirCarta());

// Evento click de los botones:
btnPedir.addEventListener('click', () => {
  // Tomamos una carta:
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorDeLacarta(carta);
  puntos[0].innerText = puntosJugador;

  // Mostramos la carta:
});

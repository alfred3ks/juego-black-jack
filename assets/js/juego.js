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
let deck = [];
const typeOfCarts = ['C', 'D', 'H', 'S'];
const cartSpecial = ['A', 'J', 'Q', 'K'];

// Creamos una nueva baraja:
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of typeOfCarts) {
      deck.push(i + type);
    }
  }

  for (let type of typeOfCarts) {
    for (let special of cartSpecial) {
      deck.push(special + type);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

createDeck();

// Esta funcion me permite tomar una carta:
// Tomamos un carta del monton y la devolvemos y la quitamos del monton:
const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay carta en el deck';
  }
  const cart = deck.pop();
  return cart;
};

// Funcion que saca la carta que viene:
const cartValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === 'A' ? 11 : 10) : parseInt(value);
};

const value = cartValue(pedirCarta());

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
  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

createDeck();

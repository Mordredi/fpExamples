import { map, filter, compose, transduce, flip, append, prop, assoc, toUpper, evolve } from 'ramda';
import { logger } from './logger';

const logRed = logger('red');
const logGreen = logger('green');
const logBlue = logger('blue');

const pokemon = [
  {
    name: 'Charizard',
    caught: true,
  }, {
    name: 'Pikachu',
    caught: true,
  }, {
    name: 'Charmander',
    caught: false,
  }, {
    name: 'Squirtle',
    caught: false,
  }, {
    name: 'Caterpie',
    caught: true,
  }, {
    name: 'Weedle',
    caught: false,
  }, {
    name: 'Pidgey',
    caught: true,
  }, {
    name: 'Mew',
    caught: false,
  }, {
    name: 'Zapdos',
    caught: false,
  }, {
    name: 'Snorlax',
    caught: true,
  },
]

//const caughtInCaps = pokemon => {
  //let filteredPokemon = [];
  //for (let i = 0, { length } = pokemon; i < length; i++) {
    //if (pokemon[i].caught) {
      //filteredPokemon.push(Object.assign({}, pokemon[i], {name: pokemon[i].name.toUpperCase()}))
    //}
  //}
  //return filteredPokemon;
//};

//const caughtInCaps = pokemon => 
  //pokemon
    //.filter(p => p.caught)
    //.map(p => Object.assign({}, p, {name: p.name.toUpperCase()}));

//const filteredPokemon = pokemon => filter(p => p.caught, pokemon);
//const cappedPokemon = pokemon => map(p => Object.assign({}, p, {name: p.name.toUpperCase()}), pokemon);

//const caughtInCaps = pokemon => compose(cappedPokemon, filteredPokemon)(pokemon);

//const filteredPokemon = filter(p => p.caught);
//const cappedPokemon = map(p => Object.assign({}, p, {name: p.name.toUpperCase()}));
//const caughtInCaps = compose(filteredPokemon, cappedPokemon);

//const filteredPokemon = filter(p => {
  //logRed(p).runIO();
  //return p.caught
//});

//const cappedPokemon = map(p => {
  //logBlue(p).runIO();
  //return Object.assign({}, p, {name: p.name.toUpperCase()})
//});

//const caughtInCaps = compose(cappedPokemon, filteredPokemon);

//const transducer = compose(cappedPokemon, filteredPokemon);
//const caughtInCaps = transduce(transducer, flip(append), []);

//const filteredPokemon = filter(prop('caught')); 
//const cappedPokemon = map(evolve({name: toUpper}));
//const caughtInCaps = compose(cappedPokemon, filteredPokemon);

const caughtInCaps = compose(
  map(evolve({name: toUpper})),
  filter(prop('caught')),
);

logGreen(caughtInCaps(pokemon)).runIO();

if (module.hot) {
  module.hot.accept()
}



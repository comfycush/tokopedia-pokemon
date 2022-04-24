import { render, screen, cleanup } from '@testing-library/react';
import { toTitleCase } from '../../../utils/utils';
import PokemonList from '../PokemonList';

const pokemonsOwned = {
  bulbasaur: 1,
  ivysaur: 2,
};

const pokemons = [
  {
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    name: 'ivysaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    name: 'venusaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    name: 'charmeleon',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
    name: 'charizard',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
    name: 'squirtle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
    name: 'wartortle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
    name: 'blastoise',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    __typename: 'PokemonItem',
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
    name: 'caterpie',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    __typename: 'PokemonItem',
  },
];

afterEach(() => {
  cleanup();
});

test('should render PokemonList component', () => {
  render(
    <PokemonList pokemons={pokemons} pokemonsOwned={pokemonsOwned} />
  );

  pokemons.forEach((poke) => {
    const pokemonNameElement = screen.getByTestId(
      `name-${poke.name}`
    );
    expect(pokemonNameElement).toBeInTheDocument();
    expect(pokemonNameElement).toHaveTextContent(
      toTitleCase(poke.name)
    );
  });
});

test('should match owned pokemon count', () => {
  render(
    <PokemonList pokemons={pokemons} pokemonsOwned={pokemonsOwned} />
  );

  const pokemonOwnedBulbasaurElement =
    screen.getByTestId(`owned-bulbasaur`);
  expect(pokemonOwnedBulbasaurElement).toBeInTheDocument();
  expect(pokemonOwnedBulbasaurElement).toHaveTextContent('Owned: 1');

  const pokemonOwnedIvysaurElement =
    screen.getByTestId(`owned-ivysaur`);
  expect(pokemonOwnedIvysaurElement).toBeInTheDocument();
  expect(pokemonOwnedIvysaurElement).toHaveTextContent('Owned: 2');

  const pokemonOwnedCharmanderElement =
    screen.getByTestId(`owned-charmander`);
  expect(pokemonOwnedCharmanderElement).toBeInTheDocument();
  expect(pokemonOwnedCharmanderElement).toHaveTextContent('Owned: 0');
});

import { render, screen, cleanup } from '@testing-library/react';
import { toTitleCase } from '../../../utils/utils';
import MyPokemonCard from '../MyPokemonCard';

const pokemon = {
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  name: 'bulbasaur',
  nickname: 'bulbasaur-1',
};

const pokemonsOwned = [
  {
    name: 'bulbasaur',
    nickname: 'bulbasaur-1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'blastoise',
    nickname: 'blastoise-1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
  {
    name: 'charmander',
    nickname: 'charmander-2',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    name: 'dugtrio',
    nickname: 'dugtrio-1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
  },
  {
    name: 'charmeleon',
    nickname: 'charmeleon-1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    name: 'squirtle',
    nickname: 'squirtle-1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
];

afterEach(() => {
  cleanup();
});

test('should render MyPokemonCard component', () => {
  render(<MyPokemonCard pokemon={pokemon} />);
  const myPokemonCardElement = screen.getByTestId('card-bulbasaur');
  expect(myPokemonCardElement).toBeInTheDocument();
});

test('should render Pokemon Name correctly', () => {
  render(<MyPokemonCard pokemon={pokemon} />);
  const myPokemonCardElement = screen.getByTestId('title-bulbasaur');
  expect(myPokemonCardElement).toBeInTheDocument();
  expect(myPokemonCardElement).toHaveTextContent('Bulbasaur');
});

test('should have anchor tag with correct href', () => {
  render(<MyPokemonCard pokemon={pokemon} />);
  const myPokemonCardElement = screen.getByTestId('a-bulbasaur');
  expect(myPokemonCardElement).toHaveAttribute('href', '/bulbasaur');
});

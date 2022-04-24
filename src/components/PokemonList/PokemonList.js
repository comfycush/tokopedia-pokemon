import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { toTitleCase } from '../../utils/utils';
import PropTypes from 'prop-types';

const propTypes = {
  pokemons: PropTypes.array,
  pokemonsOwned: PropTypes.object.isRequired,
};

const defaultProps = {
  pokemons: [],
  pokemonsOwned: {},
};

const PokemonList = ({ pokemons, pokemonsOwned }) => {
  return (
    <div className="mb-3">
      <ListGroup>
        {pokemons.map((pokemon) => (
          <ListGroupItem
            key={pokemon.name}
            action
            tag={'a'}
            href={`/${pokemon.name}`}
          >
            <div className="d-flex justify-content-between">
              <div>{toTitleCase(pokemon.name)}</div>
              <div>Owned: {pokemonsOwned[pokemon.name] || 0}</div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default PokemonList;

PokemonList.propTypes = propTypes;
PokemonList.defaultProps = defaultProps;

import React from 'react';
import { Row } from 'reactstrap';
import MyPokemonCard from '../../components/MyPokemonCard/MyPokemonCard';
import {
  useMyPokemonList,
  useRemoveMyPokemon,
} from '../../context/MyPokemonListContext';
import { StyledContainer } from '../../styled/shared/styles';

const MyPokemonsList = () => {
  const myPokemonList = useMyPokemonList();
  const removePokemon = useRemoveMyPokemon();

  return (
    <StyledContainer>
      <h1>My Pokemon List</h1>
      <Row xs={2} md={4} lg={6}>
        {myPokemonList.map((pokemon) => (
          <MyPokemonCard pokemon={pokemon} onRemove={removePokemon} />
        ))}
      </Row>
    </StyledContainer>
  );
};

export default MyPokemonsList;

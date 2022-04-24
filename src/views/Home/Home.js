import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import CustomPaginate from '../../components/CustomPaginate/CustomPaginate';
import PokemonList from '../../components/PokemonList/PokemonList';
import { useMyPokemonList } from '../../context/MyPokemonListContext';
import { POKEMONS } from '../../graphql/queries';
import { StyledContainer } from '../../styled/shared/styles';

const Home = () => {
  const limit = 10;
  const [page, setPage] = useState(0);
  const myPokemonList = useMyPokemonList();

  const [pokemonsOwned] = useState(() => {
    const temp = {};
    myPokemonList.forEach((pokemon) => {
      if (!temp[pokemon.name]) {
        temp[pokemon.name] = 1;
      } else {
        temp[pokemon.name] = temp[pokemon.name] + 1;
      }
    });
    return temp;
  });

  const { loading, error, data } = useQuery(POKEMONS, {
    variables: {
      limit,
      offset: page * limit,
    },
  });

  function handlePaginationChange(page) {
    setPage(page);
  }

  if (loading) {
    return (
      <StyledContainer>
        <div className="animated fadeIn pt-3 text-center">
          Loading...
        </div>
      </StyledContainer>
    );
  }

  if (error) {
    console.log(error);
    return (
      <StyledContainer>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h2 className="text-white">Something went wrong...</h2>
        </div>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <h1>Pokemon List</h1>
      <PokemonList
        pokemons={data.pokemons.results}
        pokemonsOwned={pokemonsOwned}
      />
      <CustomPaginate
        count={data.pokemons.count}
        page={page}
        limit={limit}
        onChange={handlePaginationChange}
      />
    </StyledContainer>
  );
};

export default Home;

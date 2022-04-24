import React, { useState, useEffect, useContext } from 'react';

const MyPokemonsListContext = React.createContext();
const MyPokemonsListUpdateContext = React.createContext();
const RemoveMyPokemonContext = React.createContext();

export const useMyPokemonList = () =>
  useContext(MyPokemonsListContext);
export const useMyPokemonListUpdate = () =>
  useContext(MyPokemonsListUpdateContext);
export const useRemoveMyPokemon = () =>
  useContext(RemoveMyPokemonContext);

export const MyPokemonListProvider = ({ children }) => {
  const [myPokemonList, setMyPokemonList] = useState(() =>
    getLocalStorage()
  );

  function getLocalStorage() {
    try {
      const myPokemonList = localStorage.getItem('myPokemonList');
      return myPokemonList ? JSON.parse(myPokemonList) : [];
    } catch (err) {
      return [];
    }
  }

  function updateMyPokemonList(value) {
    setMyPokemonList((prev) => [...prev, value]);
  }

  function setLocalStorage(value) {
    localStorage.setItem('myPokemonList', JSON.stringify(value));
  }

  function removeMyPokemon(nickname) {
    const pokemon = myPokemonList.filter(
      (pokemon) => pokemon.nickname !== nickname
    );
    setMyPokemonList(pokemon);
  }

  useEffect(() => {
    setLocalStorage(myPokemonList);
  }, [myPokemonList]);

  return (
    <MyPokemonsListContext.Provider value={myPokemonList}>
      <MyPokemonsListUpdateContext.Provider
        value={updateMyPokemonList}
      >
        <RemoveMyPokemonContext.Provider value={removeMyPokemon}>
          {children}
        </RemoveMyPokemonContext.Provider>
      </MyPokemonsListUpdateContext.Provider>
    </MyPokemonsListContext.Provider>
  );
};

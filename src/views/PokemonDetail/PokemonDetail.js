import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Card, CardBody } from 'reactstrap';
import { POKEMON_DETAIL } from '../../graphql/queries';
import {
  PokemonImage,
  StyledContainer,
} from '../../styled/shared/styles';
import { toTitleCase } from '../../utils/utils';
import PokeNicknameForm from '../../components/forms/PokeNicknameForm';
import { useMyPokemonListUpdate } from '../../context/MyPokemonListContext';

const TypeBadge = styled(Badge)`
  margin-right: 10px;
`;

const PokemonDetail = () => {
  const { name } = useParams();
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nicknameDuplicateError, setNicknameDuplicateError] =
    useState('');

  const updateMyPokemonList = useMyPokemonListUpdate();

  const { loading, error, data } = useQuery(POKEMON_DETAIL, {
    variables: {
      name: name,
    },
  });

  function handleCatchPokemon() {
    const successful = Math.random() < 0.5;
    setIsSuccessful(successful);
    handleToggleModal();
  }

  function handleToggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleFormSubmit(values) {
    let existingMyPokemonList = localStorage.getItem('myPokemonList');

    existingMyPokemonList = existingMyPokemonList
      ? JSON.parse(existingMyPokemonList)
      : [];

    if (
      existingMyPokemonList.some(
        (myPokemon) => myPokemon.nickname === values.nickname
      )
    ) {
      setNicknameDuplicateError(
        'This Pokemon with the same nickname has already been added'
      );
    } else {
      const dataSubmit = {
        name: data.pokemon.name,
        nickname: values.nickname,
        image: data.pokemon.sprites.front_default,
      };
      updateMyPokemonList(dataSubmit);
      handleToggleModal();
    }
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
    return (
      <StyledContainer>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h2 className="text-white">Something went wrong...</h2>
        </div>
      </StyledContainer>
    );
  }

  return (
    <>
      <StyledContainer>
        <Card>
          <CardBody>
            <h1>{toTitleCase(data.pokemon.name)}</h1>
            <div className="justify-content-center d-flex">
              <PokemonImage
                src={data.pokemon.sprites.front_default}
              />
            </div>
            <hr />
            <h3>Type</h3>
            {data.pokemon.types.map((type) => (
              <TypeBadge color="success" key={type.type.name}>
                {type.type.name}
              </TypeBadge>
            ))}

            <hr />
            <h3>Moves</h3>
            {data.pokemon.moves.map((move, i) => (
              <TypeBadge color="success" key={move.move.name}>
                {move.move.name}
              </TypeBadge>
            ))}
            <hr />
            <div className="d-flex justify-content-center">
              <Button
                color="primary"
                className="btn-lg"
                onClick={handleCatchPokemon}
              >
                Catch!
              </Button>
            </div>
          </CardBody>
        </Card>
      </StyledContainer>
      <Modal isOpen={modalIsOpen} toggle={handleToggleModal}>
        {isSuccessful ? (
          <>
            <ModalHeader toggle={handleToggleModal}>
              Gotcha!
            </ModalHeader>
            <ModalBody>
              <p>Give your new pokemon a name:</p>
              <PokeNicknameForm
                initialValues={{
                  nickname: '',
                }}
                onSubmit={handleFormSubmit}
                errors={nicknameDuplicateError}
              />
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader toggle={handleToggleModal}>
              Oh no!
            </ModalHeader>
            <ModalBody>Failed, Try Again!</ModalBody>
          </>
        )}
      </Modal>
    </>
  );
};

export default PokemonDetail;

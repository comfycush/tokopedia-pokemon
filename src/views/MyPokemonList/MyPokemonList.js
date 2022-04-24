import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import {
  useMyPokemonList,
  useRemoveMyPokemon,
} from '../../context/MyPokemonListContext';
import { StyledContainer } from '../../styled/shared/styles';
import { toTitleCase } from '../../utils/utils';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--bs-body-color);

  :hover {
    color: var(--bs-body-color);
  }
`;

const MyPokemonsList = () => {
  const myPokemonList = useMyPokemonList();
  const removePokemon = useRemoveMyPokemon();

  return (
    <StyledContainer>
      <h1>My Pokemon List</h1>
      <Row xs={2} md={4} lg={6}>
        {myPokemonList.map((pokemon) => (
          <Col>
            <StyledCard>
              <StyledLink to={`/${pokemon.name}`} replace={true}>
                <CardImg src={pokemon.image} />
                <CardBody>
                  <CardTitle tag={'h5'}>
                    {toTitleCase(pokemon.name)}
                  </CardTitle>
                  <CardSubtitle tag={'h6'}>
                    {pokemon.nickname}
                  </CardSubtitle>
                </CardBody>
              </StyledLink>
              <StyledButton
                color="danger"
                onClick={() => removePokemon(pokemon.nickname)}
              >
                Remove
              </StyledButton>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default MyPokemonsList;

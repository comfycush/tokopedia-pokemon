import styled from '@emotion/styled';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
} from 'reactstrap';
import { toTitleCase } from '../../utils/utils';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--bs-body-color);

  :hover {
    color: var(--bs-body-color);
  }
`;

const propTypes = {
  pokemon: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const defaultProps = {
  pokemon: {},
  onRemove: () => {},
};

const MyPokemonCard = ({ pokemon, onRemove }) => {
  return (
    <Col data-testid={`card-${pokemon.name}`}>
      <StyledCard>
        <StyledLink
          href={`/${pokemon.name}`}
          data-testid={`a-${pokemon.name}`}
        >
          <CardImg src={pokemon.image} />
          <CardBody>
            <CardTitle
              tag={'h5'}
              data-testid={`title-${pokemon.name}`}
            >
              {toTitleCase(pokemon.name)}
            </CardTitle>
            <CardSubtitle tag={'h6'}>{pokemon.nickname}</CardSubtitle>
          </CardBody>
        </StyledLink>
        <StyledButton
          color="danger"
          onClick={() => onRemove(pokemon.nickname)}
        >
          Remove
        </StyledButton>
      </StyledCard>
    </Col>
  );
};

export default MyPokemonCard;

MyPokemonCard.propTypes = propTypes;
MyPokemonCard.defaultProps = defaultProps;

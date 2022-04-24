import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  padding-top: 72px;
  padding-bottom: 16px;
  min-height: 100vh;
  margin: 0 auto;

  @media (min-width: 340px) {
    max-width: 330px;
  }

  @media (min-width: 480px) {
    max-width: 360px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const PokemonImage = styled.img`
  width: 180px;
  height: 180px;
`;

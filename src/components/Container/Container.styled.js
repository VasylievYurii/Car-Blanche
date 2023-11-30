import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 80% 30%;
  background-image: ${(props) => props.$backgroundImage || 'none'};
  background-size: 50%;
`;

export const ContainerStyled = styled.div`
  box-sizing: border-box;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  height: ${(props) => props.size || 'auto'};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: ${(props) => props.$paddingBottom || '150px'};
    padding-top: ${(props) => props.$paddingTop || '150px'};
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;

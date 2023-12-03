import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  color: var(--color-main);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  display: flex;
  width: fit-content;
  height: auto;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--color-accent);
  transition: background-color 0.3s var(--timing-function);
  border: none;

  &:hover {
    background-color: var(--color-hover);
  }
`;

export const Logo = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: #03045e;
  flex: 1;
`;

export const Wrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MainText = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 50px;
  width: 300px;
  > p {
    color: var(--color-accent);
  }
`;

export const MainDescription = styled.p`
  margin-bottom: 20px;
  width: 400px;
`;

import styled from 'styled-components';
import { MdCarRental } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(18, 20, 23, 0.1);
  z-index: 1;
  width: 100%;
  /* overflow-x: hidden; */

  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 12px 18px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 10px 200px;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:hover,
  &:focus {
    color: var(--color-hover);
  }
  &.active {
    color: var(--color-hover);
  }
`;

export const Logo = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: var(--color-accent);
  transition:
    transform 0.4s var(--timing-function),
    color 0.4s var(--timing-function);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: var(--color-hover);
  }
`;

export const StyledLink = styled(NavLink)``;

export const MdCarRentalStyled = styled(MdCarRental)`
  color: var(--color-accent);
  width: 38px;
  height: 38px;
  transition:
    transform 0.4s var(--timing-function),
    color 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
    color: var(--color-hover);
  }
`;

export const FaHeartStyled = styled(FaHeart)`
  color: var(--color-accent);
  width: 38px;
  height: 38px;
  transition:
    transform 0.4s var(--timing-function),
    color 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
    color: var(--color-hover);
  }
`;

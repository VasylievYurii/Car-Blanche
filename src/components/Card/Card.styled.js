import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
  }
`;

export const FavoriteImg = styled.svg`
  position: absolute;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MainText = styled.h2`
  color: var(--color-text-main);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  > span {
    color: var(--color-accent);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Info = styled.p`
  color: var(--color-text-prescription);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

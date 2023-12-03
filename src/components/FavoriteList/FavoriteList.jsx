import React from 'react';
import Card from 'components/Card';
import { v4 as uuidv4 } from 'uuid';
import { getFavorites } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { FavoriteListStyled } from './FavoriteList.styled';

const FavoriteList = () => {
  const favorites = useSelector(getFavorites);
  return (
    <FavoriteListStyled>
      {favorites.map((advertisement) => (
        <Card key={uuidv4()} advertisement={advertisement} />
      ))}
    </FavoriteListStyled>
  );
};

export default FavoriteList;

import React from 'react';
import Container from 'components/Container';
import FavoriteList from 'components/FavoriteList';
import Header from 'components/Header';

const Favorites = () => {
  return (
    <>
      <Header />
      <Container>
        <FavoriteList />
      </Container>
    </>
  );
};

export default Favorites;

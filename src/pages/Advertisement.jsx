import React from 'react';
import Container from 'components/Container';
import AdvertisementList from 'components/AdvertisementList';
import Filter from 'components/Filter';
import Header from 'components/Header';

const Advertisement = () => {
  return (
    <>
      <Header />
      <Container>
        <Filter />
        <AdvertisementList />
      </Container>
    </>
  );
};

export default Advertisement;

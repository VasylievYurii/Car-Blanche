import React from 'react';
import Container from 'components/Container';
import AdvertisementList from 'components/AdvertisementList';
import Filter from 'components/Filter';

const Advertisement = () => {
  return (
    <Container>
      <Filter />
      <AdvertisementList />
    </Container>
  );
};

export default Advertisement;

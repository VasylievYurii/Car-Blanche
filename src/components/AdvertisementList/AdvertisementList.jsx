import React from 'react';
import advertisements from './advertsCars';
import { AdvertisementListStyled } from './AdvertisementList.styled';
import Card from 'components/Card';
import { v4 as uuidv4 } from 'uuid';

const AdvertisementList = () => {
  return (
    <AdvertisementListStyled>
      {advertisements.map((advertisement) => (
        <Card key={uuidv4()} advertisement={advertisement} />
      ))}
    </AdvertisementListStyled>
  );
};

export default AdvertisementList;

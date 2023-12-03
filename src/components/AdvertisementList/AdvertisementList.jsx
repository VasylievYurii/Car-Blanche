import React from 'react';
import { getAdverts, getStatusFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from 'components/Card';
import { AdvertisementListStyled } from './AdvertisementList.styled';

const AdvertisementList = () => {
  const adverts = useSelector(getAdverts);
  const filtered = useSelector(getStatusFilter);

  if (filtered.length === 0) {
    return (
      <AdvertisementListStyled>
        {adverts.map((advertisement) => (
          <Card key={uuidv4()} advertisement={advertisement} />
        ))}
      </AdvertisementListStyled>
    );
  } else {
    return (
      <AdvertisementListStyled>
        {filtered.map((advertisement) => (
          <Card key={uuidv4()} advertisement={advertisement} />
        ))}
      </AdvertisementListStyled>
    );
  }
};

export default AdvertisementList;

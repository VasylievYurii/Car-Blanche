import React, { useEffect } from 'react';
import { AdvertisementListStyled } from './AdvertisementList.styled';
import Card from 'components/Card';
import { v4 as uuidv4 } from 'uuid';
import { getAdverts, getStatusFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

const AdvertisementList = () => {
  const adverts = useSelector(getAdverts);
  // const statusFilter = useSelector(getStatusFilter);
  // const dispatch = useDispatch();

  return (
    <AdvertisementListStyled>
      {adverts.map((advertisement) => (
        <Card key={uuidv4()} advertisement={advertisement} />
      ))}
    </AdvertisementListStyled>
  );
};

export default AdvertisementList;

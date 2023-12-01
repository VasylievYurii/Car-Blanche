import React from 'react';
import Button from 'components/Button';
import {
  CardWrapper,
  ImgWrapper,
  Img,
  FavoriteImg,
  DescriptionWrapper,
  MainTextWrapper,
  MainText,
  InfoWrapper,
  Info,
} from './Card.styled';

const Card = ({ advertisement }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    // rentalConditions,
    // mileage,
  } = advertisement;

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} loading="lazy" alt={make} title={description} />
        <FavoriteImg></FavoriteImg>
      </ImgWrapper>
      <DescriptionWrapper>
        <MainTextWrapper>
          <MainText>
            {make}&nbsp;
            <span>{model}</span>, {year}
          </MainText>
          <MainText>{rentalPrice}</MainText>
        </MainTextWrapper>
        <InfoWrapper>
          <Info>{address}</Info>
          <Info>{rentalCompany}</Info>
          <Info>?</Info>
          <Info>{type}</Info>
          <Info>{model}</Info>
          <Info>{id}</Info>
          <Info>{functionalities}</Info>
        </InfoWrapper>
      </DescriptionWrapper>
      <Button>Learn More</Button>

      {/* <p>{img}</p> */}
      {/* <p>{description}</p>
      <p>{fuelConsumption}</p>
      <p>{engineSize}</p>
      <p>{accessories}</p>

      <p>{rentalConditions}</p>
      <p>{mileage}</p> */}
    </CardWrapper>
  );
};

export default Card;

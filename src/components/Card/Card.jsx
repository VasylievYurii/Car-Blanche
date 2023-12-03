import React, { useState } from 'react';
import {
  CardWrapper,
  ImgWrapper,
  Img,
  FavoriteImg,
  ButtonFavorite,
  DescriptionWrapper,
  MainTextWrapper,
  MainText,
  InfoWrapper,
  Info,
  NoImage,
  LinkButton,
} from './Card.styled';
import getSplitArray from 'helpers/getSplitArray';
import sprite from '../../assets/sprite.svg';
import Modal from 'components/Modal';
import CardFull from 'components/CardFull';

const Card = ({ advertisement }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = advertisement;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  let spliterForAddress = ', ';
  let addressArray = getSplitArray(address, spliterForAddress);

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} loading="lazy" alt={make} title={description} />
        <NoImage>
          <use href={`${sprite}#icon-car`} />
        </NoImage>
      </ImgWrapper>

      <ButtonFavorite type="button">
        <FavoriteImg>
          <use href={`${sprite}#icon-favorite`} />
        </FavoriteImg>
      </ButtonFavorite>
      <DescriptionWrapper>
        <MainTextWrapper>
          <MainText>
            {make}
            {model === 'Enclave' || model === 'XC90' || model === 'XC60' ? (
              <span>&nbsp;{model}</span>
            ) : null}
            ,&nbsp;{year}
          </MainText>
          <MainText>{rentalPrice}</MainText>
        </MainTextWrapper>
        <InfoWrapper>
          <Info>{addressArray[1]}</Info>
          <Info>{addressArray[2]}</Info>

          {rentalCompany === 'Premium Auto Rentals' ? (
            <Info>Auto Rentals</Info>
          ) : (
            <Info>{rentalCompany}</Info>
          )}

          {id === '9587' || id === '9597' || id === '9598' ? null : (
            <Info>Premium</Info>
          )}
        </InfoWrapper>
        <InfoWrapper>
          <Info>{type}</Info>
          <Info>{model}</Info>
          <Info>{id}</Info>
          {functionalities[0] === 'Power liftgate' ? (
            <Info>Power liftgate</Info>
          ) : (
            <Info>{accessories[2]}</Info>
          )}
        </InfoWrapper>
      </DescriptionWrapper>
      <LinkButton onClick={toggleModal}>Learn More</LinkButton>
      {showModal && (
        <Modal onClick={toggleModal}>
          <CardFull id={id} />
        </Modal>
      )}
    </CardWrapper>
  );
};

export default Card;

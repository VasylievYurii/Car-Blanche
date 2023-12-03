import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ padding, children }) => {
  return (
    <ButtonStyled type="button" $padding={padding}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

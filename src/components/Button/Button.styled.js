import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: var(--color-main);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  display: flex;
  width: ${(props) => props.size || '274px'};
  height: ${(props) => props.size || '44px'};
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--color-accent);
  transition: background-color 0.3s var(--timing-function);
  border: none;

  &:hover {
    background-color: var(--color-hover);
  }
`;

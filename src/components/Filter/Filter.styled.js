import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const Select = styled.select`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 89px;
  background-color: var(--color-back-second);
  border: none;
  outline: none;
  border-radius: 14px;

  &:focus {
    outline: 1px solid var(--color-accent);
  }
`;

export const SelectPrice = styled(Select)`
  padding-right: 30px;
`;

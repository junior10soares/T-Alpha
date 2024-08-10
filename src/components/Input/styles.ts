import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px; 
`;

export const InputContainer = styled.input`
  width: 100%;
  padding: 15px 40px 15px 15px; 
  margin: 0;
  border: 1px solid ${(props) => props.theme['gray']};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  background: ${(props) => props.theme['white']};
  
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: ${(props) => props.theme['blue']};
    box-shadow: 0 0 5px ${(props) => props.theme['blue']};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

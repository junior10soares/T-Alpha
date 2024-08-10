import { Search } from "lucide-react";
import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
`;

export const SearchIcon = styled(Search)`
  color: ${(props) => props.theme.blue};
  cursor: pointer;
  margin-left: -50px;
  margin-top: 15px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  margin-top: 15px;
  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
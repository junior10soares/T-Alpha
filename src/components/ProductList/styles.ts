import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ProductItem = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 750px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: -5px;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 24px;
    text-align: center;
    color: ${(props) => props.theme.black};
    margin: 0; 
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme.darkGray};
    margin: 0; 
  }
  footer{
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 30;
  }
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  div {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.black};
      transition: color 0.3s;
      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.black};
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;
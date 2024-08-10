import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${(props) => props.theme.darkGray};

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px; 
    height: 400px; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.white}; 
  }
  h1 {
    font-size: 24px; 
    text-align: center;
    color: ${(props) => props.theme.black};
    margin-bottom: 20px; 
  }
  footer{
    display: flex;
  }
  h2{
    font-size: 15px; 
    text-align: center;
    color: ${(props) => props.theme.black};
    margin-top: 20px; 
  }
  span{
    font-size: 15px; 
    color: ${(props) => props.theme.black};
    text-align: center;
    margin-top: 20px; 
  }
`;

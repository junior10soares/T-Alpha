import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['white']};
  padding: 20px;
`
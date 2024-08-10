import styled from "styled-components";

export const Button = styled.button<{ variant?: 'default' | 'outline', width?: string }>`
  width: ${(props) => props.width || (props.variant === 'outline' ? 'auto' : '100%')};
  padding: ${(props) => props.variant === 'default' ? '10px' : '4px'};
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.variant === 'outline' ? 'transparent' : props.theme['blue']};
  color: ${(props) => props.variant === 'outline' ? props.theme['blue'] : props.theme['white']};
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.variant === 'outline' ? 'transparent' : props.theme['darkBlue']};
    border-color: ${(props) => props.variant === 'outline' ? props.theme['blue'] : 'transparent'};
    color: ${(props) => props.variant === 'default' ? 'white' : props.theme['darkBlue']};
  }

  &:active {
    background-color: ${(props) => props.variant === 'outline' ? 'transparent' : props.theme['darkerBlue']};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  ${({ variant }) => variant === 'outline' && `
    border: 2px solid ${(props: { theme: { [x: string]: any; }; }) => props.theme['blue']};
  `}
`;

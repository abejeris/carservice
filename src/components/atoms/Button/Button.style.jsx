import styled from 'styled-components';

const StyledButton = styled.button`
 
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: manrope;
`;

export default StyledButton;
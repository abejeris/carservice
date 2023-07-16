import styled from 'styled-components';
import {theme} from '../../../theme/Theme';


const StyledButton = styled.button`
 
  background-color: ${theme.colors.primary};
  color: #fff;
  padding: 16px 40px;
  width: 203px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: manrope;
`;

export default StyledButton;
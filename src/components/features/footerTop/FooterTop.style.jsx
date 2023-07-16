import styled from 'styled-components'
import { theme } from '../../../theme/Theme';

export const StyledFooterTop = styled.div`
display: flex;
font-family: ${theme.fonts.manrope};
background-color: ${theme.colors.black};
opacity: 98%;
color: ${theme.colors.white};
`;

export const StyledFooterLeftSide = styled.div`
    width:50%;
    padding: 10px 100px;

    h3 {
        width: 80%
    };

    svg {

        margin-right: 20px;
      path {
        fill: white;
      }
    }
    
    `;

export const StyledFooterRightSide = styled.div`
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;

    p:nth-child(odd) {
        font-size: ${theme.fontSizes.body01};
        opacity: 60%
    };
`;

   

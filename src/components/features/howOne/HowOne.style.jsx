import styled from 'styled-components';
import { theme } from '../../../theme/Theme';

export const StyledHowOne = styled.div`

display: flex;
font-family: ${theme.fonts.manrope};
width: 70%;
margin: auto;
margin-bottom: 100px;

.left-side {
    width: 50%;

    h3{
        margin: 0;
   
    }
    .left-side-bottom {
        display: flex;
        flex-direction: column;
        .left-side-ticks {
            display: flex;

            p{
                font-size: ${theme.fontSizes.title02};
                font=weight: 600;
                margin-left: 20px; 
                width: 70%;
            }
         
        }
    }
 
}

.right-side {
    display: flex;
    gap: 20px;
}

`;

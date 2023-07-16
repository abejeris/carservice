import styled from 'styled-components';
import { theme } from '../../../theme/Theme';
 
export const StyledHeader = styled.div`
    display: flex;
    font-family: ${theme.fonts.manrope};
    width:70%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;

    .left-header {
        width:50%;
       img{
        height:100%
       }
    };
    
    .right-header {
        background-color: ${theme.colors.black};
        padding: 20px 100px; 

        h1 {
            color: ${theme.colors.lightgrey};
            font-weight: 800;
            font-size: ${theme.fontSizes.h1};
        };

        p {
            color: ${theme.colors.lightgrey};
            font-size: ${theme.fontSizes.body01}
            font-weight: 600;
        };

        button {
            margin-top: 50px;
        }

    }
`
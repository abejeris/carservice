import styled from 'styled-components'
import { theme } from '../../../theme/Theme';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.colors.black};
    height: 100px;
    font-family: ${theme.fonts.manrope};

    p {
        color: ${theme.colors.grey};
        font-size: ${theme.fontSizes.body02};

    }
`;

export const StyledNav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
    }

    li{
        margin: 0 20px;

    }

    a {
        color: white;
        text-decoration: none;
      }

`
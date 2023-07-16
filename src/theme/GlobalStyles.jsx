import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    
    h1 {
        font-size: ${theme.fontSizes.h1};
    }
    h2 {
        font-size: ${theme.fontSizes.h2};
    }
    h3 {
        font-size: ${theme.fontSizes.h3};
    }
}

`;
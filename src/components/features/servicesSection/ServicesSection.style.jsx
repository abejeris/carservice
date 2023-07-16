import styled from 'styled-components';
import {theme} from "../../../theme/Theme"
export const StyledServiceSection = styled.div`


    background-color: #F5F5F5;
    margin-top: 100px;
    margin-bottom: 100px;

    .service-container {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: auto;
        padding: 100px;

    .service-left {
        background-color: white;
        font-family: ${theme.fonts.manrope};
        padding: 50px;
        display: flex;
        flex-direction: column;

        h3 {
            line-height: 0;
            font-weight: 700;
            font-size: ${theme.fontSizes.h3};
        }
        p {
            opacity: 60%;
            font-size: ${theme.fontSizes.title02};
            font-weight:600;

        }
        p:last-child {
            opacity:100%;
            font-weight: 600;
            font-size: ${theme.fontSizes.body01};
        }
    }

    .service-right {
        margin-left: 20px;
        display: flex;
        align-content: flex-start;
        gap: 20px;
        flex-wrap: wrap;
    }
}
`;
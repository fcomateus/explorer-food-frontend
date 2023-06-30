import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.footer`
    /* position: fixed;
    bottom: 0; */
    
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.COLORS.HEADER};
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
        height: 18px;
        width: 22px;
    }

    #app-name {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    #copy-right {
        width: fit-content;
        font-size: 10px;
    }

    @media(min-width: 375px){
        #copy-right {
            font-size: 12px;
        }
    }

    @media(min-width: ${SIZES.tablet}){
        #app-name {
            font-size: 24px;
        }

        #copy-right {
            font-size: 14px;
        }
    }
    
`
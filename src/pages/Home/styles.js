import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    #panel {
        display: flex;
        justify-content: end;
        align-items: center;

        position: relative;

        height: 120px;
        margin: 44px 16px 60px 36px;
        border-radius: 2px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);        
    }

    #panel img {
        position: absolute;
        top: -30px;
        left: -33px;
    }

    #panel-text {
        height: fit-content;
        width: 130px;
    }

    #panel-text h1 {
        font-size: 18px;
        font-weight: 500;
    }

    @media(min-width: ${SIZES.mobileS}) {
        #panel p {
            display: none;
        }
    }

    @media(min-width: 375px) {
        #panel {
            padding: 0 10px;
        }
    }

    @media(min-width: 430px) {
        #panel-text p {
            display: inline;
            font-size: 12px;
        }

        #panel-text {
            margin-top: 15px;
            width: 200px;
        }
    }

    @media(min-width: 580px) {
        #panel-text {
            width: fit-content;
        }
    }

    @media(min-width: 780px) {
        #panel {
            padding-right: 80px;
            width: 800px;
            /* margin-inline: auto; */
        }
    }

    @media(min-width: 890px) {
        #panel {
            margin: 44px auto 16px;
        }
    }

    @media(min-width: ${SIZES.laptop}) {
        #panel {
            width: 900px;
            height: 260px;
            margin-top: 164px;
            padding-right: 20px;
        }

        #panel img {
            top: -147px;
            left: -163px;
        }

        #panel-text h1 {
            font-size: 40px;
        }
        
        #panel-text p {
            font-size: 16px;
        }
    }

    @media(min-width: ${SIZES.laptopL}) {
        #panel {
            width: 1200px;
            padding-right: 80px;
        }
    }
`
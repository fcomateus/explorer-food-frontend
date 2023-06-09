import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    .invisible {
        display: none !important;
    }

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

    #content {
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-inline: 24px;
    }

    .food-exhibition {
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-bottom: 24px;
    }

    @media(min-width: ${SIZES.mobileS}) {
        #panel p {
            display: none;
        }

        .section-title {
            font-size: 18px;
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
        }
    }


    @media(min-width: ${SIZES.laptop}) {
        /* .centered {
            width: 950px;
        } */

        #panel {
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

        .section-title {
            font-size: 24px;
        }
    }

    @media(min-width: ${SIZES.laptopL}) {
        #panel {
            padding-right: 80px;
        }

        #panel, #content {
            width: 1200px;
            margin-inline: auto;
        }

        #panel img {
            left: -60px;
        }

        #content {
            
        }
    }

    @media(min-width: ${SIZES.desktop}){
        #panel, #content {
            width: 1400px;
        }

        #panel {
            padding-right: 140px;
        }
    }
    
`
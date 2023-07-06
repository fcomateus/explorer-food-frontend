import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    margin: 20px auto;
    height: 75vh;
    max-width: 350px;
    

    #go-back {
        font-size: 18px;
        margin-bottom: 35px;

    } 

    #img-wrapper {
        display: flex;
        justify-content: center;
    }

    img {
        width: 250px;
        height: 250px;
    }

    #description-wrapper {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #description-wrapper p {
        margin-bottom: 16px;
        font-weight: 300;
    }

    .ingredient-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
        margin-bottom: 16px;

    }

    .ingredient-exihibition {
        border-radius: 5px;
        width: fit-content;
        padding: 4px 8px;
        background-color: ${({ theme }) => theme.COLORS.TAG_EXIBITION};
    }

    #button-edit {
        max-width: 270px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        padding: 10px 20px;
        text-align: center;
        border-radius: 5px;
   
    }

    #buttons-controls {
        display: flex;
        align-items: center;
        font-size: 25px;
        gap: 20px;
    }

    #buttons-quantity {
        display: flex;
        gap: 8px;
    }

    #buttons-quantity svg{
        font-size: 20px;
    }

    #order-dish {
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    @media (min-width: ${SIZES.laptop}) {
        & {
            display: flex;
            max-width: max-content;
            align-items: center;
            gap: 40px;
        }

        #go-back {
            position: absolute;
            top: 15%;
            font-size: 24px;
        }

        img {
            height: 350px;
            width: 350px;
        }

        #description-wrapper {
            align-items: start;
        }

        #description-wrapper h1 {
            font-size: 40px;
        }

        #description-wrapper p {
            font-size: 30px;
        }

        #button-edit {
            width: 150px;
        }

        

    }

    @media(min-width: ${SIZES.desktop}) {
        & {
            height: 77.5vh;
        }
    }
      
`;
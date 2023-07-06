import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    width: 100%;

    main {
        width: 320px;
        margin: 10px auto;
        padding: 0 32px;
        border: 1px solid red;


    }


    #go-back {
        font-size: 18px;
        margin-bottom: 35px;
        align-self: flex-start;

    }

    h3 {
        font-weight: normal;
    }

    /* form {
        margin: 24px 0;
    } */

    #wrapper-input-description {
        height: 120px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 260px;
        margin-top: 20px;
    }

    label {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.LABEL};
    }

    @media(min-width: ${SIZES.laptop}) {

        #footer-wrapper {
            position: fixed !important;
            bottom: 0 !important;

        }

        & {
            width: 100%;
            max-width: 1120px;
            display: flex;
            flex-direction: column;
        }
        
        form {
            display: grid;
            grid-template-areas: 
            "fileInput nameInput categoryInput"
            "ingredientsInput ingredientsInput priceInput"
            "descriptionInput descriptionInput descriptionInput"
            ;
            grid-template-columns: 2fr 4fr 3fr;
            grid-gap: 32px;

        }

        .input-wrapper {
            margin-top: 0;
            width: 100%;
        }

        #wrapper-input-file {
            grid-area: fileInput;
        }

        #wrapper-input-name {
            grid-area: nameInput;
        }

        #wrapper-input-category {
            grid-area: categoryInput;
        }

        #wrapper-input-ingredients {
            grid-area: ingredientsInput;
        }

        #wrapper-input-price {
            grid-area: priceInput;
        }

        #wrapper-input-description {
            grid-area: descriptionInput;
            height: 200px;
        }

        .buttons-wrapper {
            width: 300px;
            align-self: flex-end;
        }

        
        
    }

`;
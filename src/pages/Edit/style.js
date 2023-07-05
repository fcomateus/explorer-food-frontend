import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    margin: 10px auto;
    padding: 0 32px;
    width: 320px;


    #go-back {
        font-size: 18px;
        margin-bottom: 35px;
        align-self: flex-start;
    }

    h3 {
        font-weight: normal;
    }

    form {
        margin: 24px 0;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 260px;
        margin-top: 20px;
    }

    #wrapper-input-description {
        height: 120px;
    }

    .buttons-wrapper {
        margin-block: 20px;
        display: flex;
        gap: 12px;
    }

    label {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.LABEL};
    }

    @media(min-width: ${SIZES.laptop}) {
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

        #footer {
            position: fixed;
            bottom: 0;

            border: 1px solid red;
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
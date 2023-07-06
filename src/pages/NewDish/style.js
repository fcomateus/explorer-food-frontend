import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    width: 100%;

    #go-back {
        font-size: 18px;
        margin-bottom: 35px;
    }

    h3 {
        font-weight: normal;
    }

    main {
        min-width: 320px;
        max-width: 80%;
        margin: 10px auto;
        padding: 0 32px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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

    .button-wrapper {
        margin: 20px auto;
        width: 260px;
    }

    @media(min-width: ${SIZES.laptop}) {

        #go-back {
            align-self: flex-start;
        }        

        & {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        main {
            width: 100%;
            display: flex;
            flex-direction: column;

        }
        
        form {
            margin-top: 32px;
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

        .button-wrapper {
            margin: 32px 0 0;
            width: 200px;
            align-self: flex-end;
        }

        #footer-wrapper {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        
    }

`;
import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;

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
        margin-top: 24px;
        font-weight: 300;
    }

    .ingredient-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;

    }

    .ingredient-exihibition {
        border-radius: 5px;
        width: fit-content;
        padding: 4px 8px;
        background-color: ${({ theme }) => theme.COLORS.TAG_EXIBITION};
    }
      
`;
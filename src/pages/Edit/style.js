import styled from "styled-components";

export const Container = styled.div`
    margin: 10px 32px;

    #go-back {
        font-size: 18px;
        margin-bottom: 35px;
    }

    h3 {
        font-weight: normal;
    }

    form {
        margin-top: 24px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 260px;
        margin-top: 20px;
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

`;
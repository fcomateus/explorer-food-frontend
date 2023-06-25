import styled from "styled-components";

export const Container = styled.div`
    height: 40px;

    input {
        display: none
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-radius: 5px;
        width: 100%;
        font-size: 16px;
        gap: 6px;
        background-color: ${({ theme }) => theme.COLORS.SEARCH};

    }
    
    svg {
        font-size: 20px;
    }

`;
import styled from "styled-components";

export const Container = styled.div`

    & {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
    }

    .inner {
        display: flex;
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        position: relative;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

        min-height: 200px;
        min-width: 200px;
        margin-right: 16px;
        padding: 24px;
        border: 1px solid black;
        border-radius: 8px;
    }

    .item img {
        
        height: 88px;
        width: 88px;
        pointer-events: none;
    }

    .favorite {
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 30px;
        align-self: end;
    }

    .price {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    .card-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .card-controls-buttons {
        font-size: 20px;
    }

    .add-dish {
        padding: 4px 59px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        font-size: 14px;
        border-radius: 5px;
        font-weight: 500;
    }
`
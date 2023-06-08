import styled from "styled-components";
import { SIZES } from '../../utils/sizes'

export const Container = styled.div`

    & {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: start;

    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        text-align: center;
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

    .dish-price {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    .dish-description {
        display: none;
    }

    .card-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .wrapper-buttons-quantity {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .card-controls-buttons {
        font-size: 20px;
    }

    .add-dish {
        padding: 12px 24px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        font-size: 14px;
        border-radius: 5px;
        font-weight: 500;
    }

    @media(min-width: 648px) {
        & {
            margin-left: 0;
            max-width: 100%;
        }
    }

    @media(min-width: ${SIZES.laptop}) {
        & {
            /* margin-left: 0; */
            /* max-width: 100%; */
        }

        .item {
            padding: 24px;
            min-width: 300px;
            max-width: 300px;
        }

        .item img {
            height: 178px;
            width: 178px;
        }

        .dish-name {
            font-weight: bold;
        }

        .dish-description {
            font-size: 12px;
            display: inline;
        }

        .dish-price {
            font-size: 32px;
        }

        .card-controls {
            flex-direction: row;
        }

        .card-controls-buttons {
            font-size: 35px;
        }
    }
    
`
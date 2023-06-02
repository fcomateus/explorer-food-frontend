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

    .inner {
        display: flex;
    }

    .item {
        min-height: 200px;
        min-width: 200px;
        padding: 14px;
    }

    .item img {
        height: 50%;
        pointer-events: none;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
    }
`
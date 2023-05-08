import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-weight: bold;
    font-size: 22px;
    margin: 50px 0 70px;
  }

  .input-wrapper {
    width: 280px;
    padding: 10px;
  }
`
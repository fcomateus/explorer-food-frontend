import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-wrapper {
    width: 280px;
    padding-inline: 10px;
    margin-top: 32px;
  }

  #header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-weight: bold;
    font-size: 22px;
    margin: 50px 0 40px;
  }

  form h2 {
    display: none;
  }

  #link-to-signup {
    margin: 32px;
  }

  @media(min-width: ${SIZES.laptopL}) {
    & {
      padding: 180px 200px 0;
      flex-direction: row;
      justify-content: space-between;
    }

    #header {
      font-size: 40px;
    }

    #header svg {
      width: 50px;
      height: 50px;
    }

    .input-wrapper {
      width: 350px;
    }
    
    form {
      background: ${({ theme }) => theme.COLORS.HEADER};
      padding: 64px;
      border-radius: 16px;
    }

    form h2 {
      display: inline;
    }
  }

  @media(min-width: ${SIZES.desktop}) {
    & {
      padding-inline: 300px
    }
  }
  
`
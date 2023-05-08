import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.HEADER};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  & svg {
    font-size: 24px;
  }

  & div:has(input)  {
    display: none;
  }

  #exit {
    display: none;
  }

  #header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    gap: 10px;
  }

  #bill-icon {
    position: relative;
  }

  #counter {
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.RED};
    width: 20px;
    height: 20px;
    border-radius: 999px;
  }

  @media(min-width: 630px) {
   & div:has(input) {
    display: block;
    width: 300px;
   }

   #menu {
    display: none;
   }

   #bill-icon {
    display: none;
   }

   #exit {
    display: block;
   }

  }
`
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

  #search {
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

  #my-orders {
    display: none;
  }

  @media(min-width: 768px) {
  & {
    gap: 32px;
    padding: 0 30px;
  }

  #search {
    display: block;
    width: 300px;
   }

   #menu {
    display: none;
   }

   #bill-icon {
    display: none;
   }

   #my-orders {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.RED};
    border: none;
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    padding: 12px 46.5px;

   }

   #exit {
    display: block;
   }

  }

  @media(min-width: 1000px) {
    #search {
      width: 500px;
    }
  }

  @media(min-width: 1500px) {
    & {
      padding: 0 300px;
    }
  }
`
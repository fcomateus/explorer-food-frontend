import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

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
  
  .closed-menu {
    display: none;
  }

  .opened-menu {
    display: block;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};

    width: 100vw;
    height: 100vh;
    
  }

  .opened-menu #menu-header {
    display: flex;
    align-items: center;
    gap: 16px;

    height: 100px;
    padding: 10px;

    background-color: ${({ theme }) => theme.COLORS.HEADER};
    
    font-size: 20px;
  }

  .opened-menu .menu-body {
    margin: 32px 28px;
  }

  #open-menu-button {
    background: none;
    border: none;
  }

  .opened-menu #close-menu-button {
    background: none;
    border: none;
  }

  .opened-menu #menu-search-results {
    margin: 16px 0;
    min-height: 36px;
    max-height: 400px;

    overflow-y: scroll;
  }

  .opened-menu #exit-wrapper {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.TAG_EXIBITION};
  }

  .opened-menu #menu-exit-app {
    border: none;
    background: none;
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

  @media(min-width: ${SIZES.tablet}) {
  & {
    gap: 32px;
    padding: 0 30px;
  }

  #search {
    display: block;
    width: 300px;
   }

   #open-menu-button {
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

  @media(min-width: ${SIZES.laptop}) {
    #search {
      width: 500px;
    }
  }

  @media(min-width: ${SIZES.desktop}) {
    & {
      padding: 0 300px;
    }
  }
`
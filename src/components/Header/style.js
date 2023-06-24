import styled from "styled-components";
import { SIZES } from "../../utils/sizes";

export const Container = styled.header`
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.HEADER};
  color: ${({ theme }) => theme.COLORS.WHITE};
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

  .menu-dish-image,
  .menu-dish-image img {
    width: 60px;
    height: 60px;
  }

  .exibition-dish-menu {
    display: flex;
    gap: 10px;
    margin: 16px 0;
  }

  .opened-menu #menu-search-results {
    margin: 16px 0;
    padding: 8px;
    border-radius: 5px;
    min-height: 36px;
    max-height: 400px;
    background-color: ${({ theme }) => theme.COLORS.SEARCH};

    overflow-y: scroll;
  }

  .opened-menu .menu-option {
    padding-bottom: 2px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.TAG_EXIBITION};
  }

  .opened-menu .menu-option button {
    margin-top: 16px;
    border: none;
    background: none;
    font-size: 22px;
  }

  .exit-costumer,
  .exit-admin {
    display: none;
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

  #my-orders,
  #new-dish {
    display: none;
  }

  .header-bar-costumer {
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo-wrapper-mobile-header-bar,
  .logo-wrapper-mobile-header-bar-admin {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .search-header-bar-costumer,
  .search-header-bar-admin {
    display: none;
  }

  .header-bar-admin {
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }

  .logo-wrapper-mobile-header-bar-admin {
    /* align-self: center; */
    margin: 0 auto;
  }

  #app-name-admin-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  #label-admin-header {
    font-size: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }

  @media(min-width: ${SIZES.tablet}) {
  & {
    gap: 32px;
    padding: 0 30px;
  }

  .search-header-bar-costumer,
  .search-header-bar-admin {
    display: block;
    width: 300px;
   }

   .logo-wrapper-mobile-header-bar-admin {
    margin: 0;
  }

   .open-menu-button-header-mobile {
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


   #new-dish {
    display: block;
    background-color: ${({ theme }) => theme.COLORS.RED};
    border: none;
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    padding: 12px 46.5px;

   }

   .exit-costumer,
   .exit-admin {
    display: block;
   }

  }

  @media(min-width: ${SIZES.laptop}) {
    .search-header-bar-costumer,
    .search-header-bar-admin {
      width: 500px;
    }
  }

  @media(min-width: ${SIZES.desktop}) {
    & {
      padding: 0 300px;
    }
    .search-header-bar-costumer,
    .search-header-bar-admin {
    width: 700px;
   }
  }
`
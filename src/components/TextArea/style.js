import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  & textarea {
    width: 100%;
    height: 100%;
    
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.SEARCH};
    border: none;
    padding: 2px 8px;

    font-size: 14px;
    resize: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;

  }

  textarea::placeholder {
    color: ${({ theme }) => theme.COLORS.TAG_INPUT};
    font-family: 'Poppins', sans-serif;
  }
  
  & textarea:focus {
    border-radius: 5px;
  }
`
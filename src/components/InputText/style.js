import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;
  
  & input {
    width: 100%;
    height: 100%;
    
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.SEARCH};
    border: none;
    padding: 2px 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;

  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.TAG_INPUT};
    font-family: 'Poppins', sans-serif;
  }
  
  & input:focus {
    border-radius: 5px;
  }
`
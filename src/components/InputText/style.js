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
  }
  
  & input:focus {
    border-radius: 5px;
  }
`
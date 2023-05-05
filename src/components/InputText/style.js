import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 580px;
  height: 48px;

  & input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    padding: 2px 8px;
  }
  
  & input:focus {
    border-radius: 5px;
  }
`
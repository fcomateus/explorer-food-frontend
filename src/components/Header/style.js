import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.HEADER};
  display: flex;
  align-items: center;
  justify-content: center;
`
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0
    }
    body {
    overflow: hidden auto;
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Titillium Web', sans-serif;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

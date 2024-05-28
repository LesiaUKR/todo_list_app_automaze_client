import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  background: #181818;
  font-size: 17px;
  color: #fff;
  height: 100vh;
}
.global-container {
    display: flex;
    padding: 40px;
    gap: 40px;
    height: 100%;
  }
`;

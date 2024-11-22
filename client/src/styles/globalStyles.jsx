import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /* min-height: 100vh; */
  min-width: 100vw;
  margin: 0;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
}
* {
  transition: all ${({ theme }) => `${theme.durations.fs} ease-in-out`};
  outline: 1px solid red;
}
#root {
  width: 100%; 
  height: 100%;
  max-width: 1280px; 
  margin: 0 auto;
  text-align: center;
}
:root {
  font-family: 'Poppins', sans-serif;
}
a {
  color: inherit;
  text-decoration: none;  
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: inherit;
  width: auto;
  font-family: 'Libre Baskerville', serif;
  font-size: 0.8em;
}
a:hover {
  color: ${({ theme }) => theme.themeColor};
}
p:hover {
  color: ${({ theme }) => theme.themeColor};
}
button {
  color: ${({ theme }) => theme.colors.primary};
}
button:hover {
  color: ${({ theme }) => theme.themeColor};
}
h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Bellefair', serif;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  transition: color 0.3s ease-in-out;
  font-weight: 400;
}
p, span {
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
  font-weight: 400;
}
* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;

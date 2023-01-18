import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700&display=swap');


body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

button {
    cursor: pointer;
}

body{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.white};
    
    #root{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
}
`;

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define los colores para los modos claro y oscuro
const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
};

const darkTheme = {
  backgroundColor: '#222',
  textColor: '#fff',
};


const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 100%;
  item-aling:
`;


function ModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    body.style.backgroundColor = isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor;
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Button onClick={toggleDarkMode}>
        {isDarkMode ? '🌞' : '🌙'}
      </Button>
    </ThemeProvider>
  );
}

export default ModeButton;

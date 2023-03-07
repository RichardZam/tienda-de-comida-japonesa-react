import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css'

function App() {
  return (
    <div>
        <Header/>
      <h1>Mi aplicación de React</h1>
      <p>Bienvenido a mi aplicación de React</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
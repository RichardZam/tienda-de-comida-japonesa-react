import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/footer';
import './index.css'

function App() {
  return (
    <div>
        <Header/>
      <h1>Mi aplicación de React</h1>
      <p>Bienvenido a mi aplicación de React</p>
        <Footer/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
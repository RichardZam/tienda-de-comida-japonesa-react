import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/footer';
import './index.css'

function App() {
  return (
    <div>
        <Header/>
      <h1 className='titulo'>⛩️Tienda de Comida Japonesa⛩️</h1>
      <p className='subtitulo'>Bienvenido a nuestra Tienda de Comida Japonesa</p>
        <Footer/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
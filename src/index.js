import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
/*Componentes */
import Header from './components/Header';
import Footer from './components/footer';
import Banner from './components/Banner';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      
      <section>
      <Header/>
      </section>
      
      <section>
       <Banner/>
      </section>
      
      <h2 styles="align-items: center;">Productos</h2>
      <section>
       <ProductList/>
      </section>    
        
       <section>
       <Footer/>
      </section>
        
     
        
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

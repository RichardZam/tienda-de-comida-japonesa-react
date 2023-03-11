import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
/*Componentes */
import Header from './components/Header';
import Footer from './components/footer';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div>
      
      <section>
      <Header/>
      </section>
      
      <section>
       <Banner/>
      </section>

       <section>    
       <RecipesList/>
       </section>

      <h2 class="title-product">Productos</h2>
      <section>
       <ProductList/>
      </section>  
      

      <section>
        <Contact/>
      </section>

       <section>
       <Footer/>
      </section>
        
      
        
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

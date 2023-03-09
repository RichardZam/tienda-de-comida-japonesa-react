import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
/*Componentes */
import Header from './components/Header';
import Footer from './components/footer';
import Button from './components/button';
import Banner from './components/Banner';

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
       <Footer/>
      </section>
        
      <section>
      <Button/>
      </section>
        
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

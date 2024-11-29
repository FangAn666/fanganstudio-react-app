import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './router/AppRouter';
import Navbar from './view/Navbar';
import Footer from './view/Footer';


function App() {
  return (
      
      <div>
        
        {/* hello */}
        <Router>
          <Navbar />
        <div className='contant'>
          <AppRouter />
        </div> 
          <Footer />
        </Router>
        
      </div>
    
  );
}

export default App;

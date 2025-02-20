import React from 'react';

import { AboutUs, Footer, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    
    <Footer />
  </div>
);

export default App;

import React from 'react';

import { AboutUs, Chef, Footer, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Footer />
  </div>
);

export default App;

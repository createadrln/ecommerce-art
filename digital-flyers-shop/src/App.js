import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <About />
            <FeaturedProducts />
        </div>
    );
}

export default App;

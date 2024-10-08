import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './index.css'; // Importar estilos globales

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;

import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css'; 

function App() {
    return (
        <>
            <Navbar />
            
            <section id="home">
                <h2>Home Section</h2>
                <p>Welcome to the Recipe Book homepage!</p>
            </section>
            <section id="about">
                <h2>About Section</h2>
                <p>Learn more about our recipes and mission in this section.</p>
            </section>
            <section id="recipes">
                <h2>Recipes Section</h2>
                <p>Discover a variety of delicious recipes curated just for you!</p>
            </section>
            <section id="contact">
                <h2>Contact Section</h2>
                <p>Have questions? Feel free to reach out to us!</p>
            </section>
        </>
    );
}

export default App;

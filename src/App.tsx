import React from 'react';
import Navbar from './components/navbar/navbar';
import Display1 from './components/display1/display1'
import Display2 from './components/display2/display2'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Display1 />
        <Display2 />
        <Footer />
    </div>
  );
}

export default App;

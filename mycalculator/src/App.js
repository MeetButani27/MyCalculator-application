import './App.css';
import Navbar from './components/NavBar.js';
import Calculator from './components/Calculator.js';
import Footer from './components/Footer.js';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Calculator />
        <Footer />
      </div>
  );
}

export default App;

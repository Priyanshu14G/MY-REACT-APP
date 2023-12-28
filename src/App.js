// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Bestform from './components/Bestform';
import About from './components/About';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className='blank'>lovely</div>
  
    <>
     
      <Navbar title='TextUtils2' about='AboutUs'/>
      <div className='container'>
      <Bestform heading='Enter the text'/>
      <About/>
      </div>
    </>
    );
}

export default App;

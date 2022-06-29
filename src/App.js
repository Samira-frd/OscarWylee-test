import './App.css';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Specifications from './components/Specifications';


function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Banner/>
     <Specifications/>
    </div>
  );
}

export default App;

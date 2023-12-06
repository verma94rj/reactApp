import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Components/Navigation';
import DemoCarousel from './Customer/Components/DemoCarousel';

function App() {
  return (
    <div>
     <Navigation/>
     <div className="Mycol">
     <DemoCarousel/>
    </div>
    </div>
  );
}

export default App;

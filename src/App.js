import './App.css';
import { Navbar } from './components/navbar';
import { Header } from './components/header'
import { Skins } from './components/Skins'
import { Nosotros } from './components/nosotros'
import { Carrito} from './components/carrito'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Buscarskin } from './components/buscarskin';






function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <Routes>
          <Route path='/' element={<><Header /><Skins /></>} />
          <Route path='/category/:id' element={<Skins />} />
          <Route path='/item/:id' element={<Buscarskin />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;

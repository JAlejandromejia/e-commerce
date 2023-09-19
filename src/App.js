
import './App.css';
import { Navbar } from './components/navbar';
import { Header } from './components/header'
import { Productlist } from './components/productlist';
import { data } from './data';





function App() {
  


  return (
    <body className="App">
    <Navbar />
    <Header />
    <Productlist products={data}/>
    </body>
  );
}

export default App;

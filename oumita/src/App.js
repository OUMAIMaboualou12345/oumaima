import Contact from './components/Contact/Contact';
import Return from './components/Contact/Return';
import Navbar from './components/Navbar/Nav';
import Header from './components/Home/Header';
import About from './components/About/About.js';
import Home from './components/Home/Home';
import Point from './components/point/point';
import Services from "./components/services/services";
import Card from './components/CARDS/card';
import Carsoul from "./components/carsoul/carsoul";
import Footer  from './components/footer/footer ';
import Partie from './components/partie/partie';
import Fin  from './components/fin/fin'

import { useSelector } from "react-redux";
import { selectUser } from "./Slice";


function App() {


  const user = useSelector(selectUser)
  
  return (
    <div className="app"  >
{user ? 
  <Return />
: <>
    <Navbar />
    <Header />
    <Home />
    <About />
    <Point />
    <Services />
    <Card/>
    <Carsoul />
    <Footer />
    <Partie/>
    <Fin />
    <Contact />
</> }
</div>
  );
}

export default App;
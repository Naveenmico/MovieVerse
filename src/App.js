import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Banner/>
      <Routes>
        <Route path='/' element={<Movies/>}/>  
        <Route path='/favourites' element={<Favourite/>}/>
      </Routes>
      {/* <Banner/> */}
      {/* <Movies/> name="udai" */}
      {/* <Favourite/> */}
    </Router>
    
  );
}

export default App;

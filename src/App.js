import logo from './logo.svg';
import './App.css';
import Addbus from './component/Addbus';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchbus from './component/Searchbus';
import View from './component/View';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" exact element={<Addbus/>}/>
       <Route path="/search" exact element={<Searchbus/>}/>
       <Route path="/view" exact element={<View/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

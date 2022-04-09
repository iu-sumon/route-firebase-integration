 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

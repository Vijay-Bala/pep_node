// import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import Portal from './components/Portal'
import Home from './components/Home';
import NotFound from './components/NotFound';
 
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
         
          <Route exact path='/' element={<Register />}/>
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route path='/portal' element={<Portal />}>
            <Route path='addmovie' element={<AddMovie />}/>
            <Route path='home' element={<Home />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Login from './routes/login/login.component';
import Home from './routes/home/home.component';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Login/> } />
      <Route path='home' element={ <Home /> } />
    </Routes>
  )
}

export default App;

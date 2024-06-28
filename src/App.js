import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  

  return (
    <div id="app-container">
      {!loading && <NavBar/>}
      <Loading></Loading>
    <Routes>
      {!loading && <Route path="/"
      element={<Home/>}/>}
    </Routes>
  </div>
  );
}

export default App;

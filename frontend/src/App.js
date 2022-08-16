import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages & Components
import Home from './Pages/Home'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          

        </Routes>
        </div>     
      </BrowserRouter>
    </div>
  );
}

export default App;

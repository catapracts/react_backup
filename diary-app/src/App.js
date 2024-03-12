import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Diary App</h1>
 
      <Header />
      <hr />
      <p /><p /><p /><p />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>

      <p /><p /><p /><p />
      <hr />
      <Footer />
      
    </div>
  );
}

export default App;

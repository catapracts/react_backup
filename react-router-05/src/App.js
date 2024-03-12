import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import Gallery from './pages/Gallery';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Edit from './pages/Edit';
import Edit2 from './pages/Edit2';
import UseEffect from './pages/UseEffect';
import Footer from './pages/Footer';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  const navigate = useNavigate(); //navigate Hook을 사용할 객체 선언

  return (
    <div className="App">
      <h1>React Router</h1>
      <hr />

      {/* Routing 호출 */}
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/company">Company</Link></li>
          <li><Link to = "/gallery">Gallery</Link></li>
          <li><Link to = "/edit/100">Edit</Link></li>
          <li><Link to = "/edit2?id=200&mode=abc">Edit2</Link></li>
          <li><button onClick={()=>{navigate("/")}}>홈으로 이동</button></li>
          <li><button onClick={()=>{navigate("/company")}}>회사 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate("/about")}}>상세 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate("/gallery")}}>갤러리 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate("/edit")}}>수정 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate("/edit2")}}>수정2 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate(-1)}}>전 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate(-2)}}>전전 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate(1)}}>다음 페이지로 이동</button></li>
          <li><button onClick={()=>{navigate("/useEffect")}}>useEffect 호출</button></li>
          
        </ul>
      </nav>


      {/* Routing 처리 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/edit2" element={<Edit2 />}></Route>
        <Route path="/useEffect" element={<UseEffect />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;

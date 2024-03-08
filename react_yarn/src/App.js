import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import App01 from './components/App01';
import App02 from './components/App02';
import App03 from './components/App03';
import App04 from './components/App04';
import App05 from './components/App05';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My 1st React Component</h1>
      <h2>Output After Rendering</h2>

      <Footer />
      <br/> <p/>
      <hr/>
      <App01 />
      <br/> <p/>
      <hr/>
      <App02 />
      <br/> <p/>
      <hr/>
      <App03 />
      <br/> <p/>
      <hr/>
      <App04 />
      <br/> <p/>
      <hr/>
      <App05 />



    </div>
  );
}

export default App;

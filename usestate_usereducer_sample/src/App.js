import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';


function App() {
  return (
    <div className="App">
      <h1>useState VS useReducer</h1>
      <hr />
      <h4>UseState</h4>
      <UseState />
      <hr />
      <h4>UseReducer</h4>
      <UseReducer />
      <hr />

    </div>
  );
}

export default App;

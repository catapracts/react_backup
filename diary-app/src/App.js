import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImgTest from './test/ImgTest';
import React, {useReducer, useEffect} from 'react';


const mockData = [
  {id:"mock1", date:new Date().getTime()-1, content:"mock1", emotionId:1},
  {id:"mock2", date:new Date().getTime()-2, content:"mock2", emotionId:2},
  {id:"mock3", date:new Date().getTime()-3, content:"mock3", emotionId:3}
];


const onCreate = () => {}
const onUpdate = () => {}
const onDelete = () => {}


export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function reducer(state, action)
{
  switch(action.type)
  {
    case "INIT" : return action.data;
    case "CREATE" : return [action.data, ...state];
    //case "UPDATE" : return action.data;
    //case "DELETE" : return action.data;
  }
}


function App() {

  const [data, dispatch] = useReducer(reducer, []);
  
  useEffect( () => {dispatch({type: "INIT", data : mockData});} ,[]);

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>


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


          <Route path="/btnTest" element={<ButtonTest />}></Route>
          <Route path="/imgTest" element={<ImgTest />}></Route>
        </Routes>

      <p /><p /><p /><p />
      <hr />
      <Footer />
      
    </div>



    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

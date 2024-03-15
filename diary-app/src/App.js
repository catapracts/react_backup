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
import React, {useReducer, useEffect, useRef} from 'react';


const mockData = [
  {id:"0", date:new Date().getTime()-1, content:"mock1", emotionId:1},
  {id:"1", date:new Date().getTime()-2, content:"mock2", emotionId:2},
  {id:"2", date:new Date().getTime()-3, content:"mock3", emotionId:3}
];





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
  
  //useRef(Hook) 사용해서 고유 value 생성 후 id(mockData의 id)에 적용
  const idRef = useRef(3); // 새로 생성시 4번부터 시작


  useEffect( () => {dispatch({type: "INIT", data : mockData});} ,[]);


  // 하위 Component에서 요청한 Event 처리하는 함수들
// date : yyyy-mm-dd : TimeStamp형식의 날짜로 변환
const onCreate = (date, content, emotionId) => 
{
  dispatch({
    type: "CREATE",
    data: 
    {
      id: idRef.current++, 
      date: new Date(date).getTime(), 
      content:content,
       emotionId: emotionId}
  });
}

const onUpdate = () => {}
const onDelete = () => {}

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

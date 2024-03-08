import './App.css';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import ToDoEditor from './components/ToDoEditor';
import { useState, useRef } from 'react';



function App() {

  //MOCK 데이터(program test를 위해 임시 생성한 데이터)
  const MOCKData = 
  [
    {id : 0, isDone : false, content : "F-16 Fighting Falcon", createDate : new Date().getDate()}, 
    {id : 1, isDone : true, content : "F-15 Eagle", createDate : new Date().getDate()}, 
    {id : 2, isDone : false, content : "F-22 Raptor", createDate : new Date().getDate()}
  ];

  //할일에 대한 정보들 = Array안에 있는 object들
  const [todo, setTodo] = useState(MOCKData);

  const onCreate = (content) => 
  {
    console.log("App Component에 값이 잘 전송됨");
    console.log(content);
  }

  const onUpdate = () => 
  {
    console.log("update func.")
  }

  const onDelete = () =>
  {
    console.log("delete func.")
  }


  return (
    <div className="App">
      <Header />
      

      <ToDoEditor 
      onCreate={onCreate} //Child의 Event를 받는 props 받고 위에 명시한 onCreate함수 실행
      />

      <ToDoList 
      todo = {todo} //Array State
      onUpdate={onUpdate} onDelete={onDelete} //ToDoItem -> App -> ToDoList
      />
      
      <ToDoItem  />

    </div>
  );
}

export default App;

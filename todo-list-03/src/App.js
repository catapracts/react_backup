import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoEditor from './components/ToDoEditor';
import { useState, useRef } from 'react';



function App() {

  //MOCK 데이터(program test를 위해 임시 생성한 데이터)
  //isDone = CheckBox
  const MOCKData = 
  [
    {id : 0, isDone : false, content : "F-16 Fighting Falcon", createDate : new Date().getDate()}, 
    {id : 1, isDone : false, content : "F-15 Eagle", createDate : new Date().getDate()}, 
    {id : 2, isDone : false, content : "F-22 Raptor", createDate : new Date().getDate()}
  ];

  //Date().getDate() : UNIX시간(1970.1.1) 생성
  //Date().getTime() : 현재 System의 시간 생성

  //할일에 대한 정보들 = Array안에 있는 object들
  //setTodo - 기존 배열값 수정 -> State 다룬다.
  //State는 바뀌면 바로 Rendering된다.
  const [todo, setTodo] = useState(MOCKData);


  // useRef = Rendering이후 임의의 새로운 unique value 생성
  const idRef = useRef(3); //3번부터 자동 값 생성 시작

  // content 추가
  const onCreate = (content) => 
  {
    //하위 component로 event 받음 => onCreate props를 통해 전송
    console.log("App Component에 값이 잘 전송됨");
    console.log(content);

    // 가져온 값(하위 Component의 event)을 setTodo배열 안에 앞에서부터 추가(객체 생성)
    // idRef -> idRef.current
    const newItem = 
    {
      id : idRef.current,
      // content : content <=> content 축약형 가능 = ES6에서 새로 추가된 문법 - 객체의 field이름 = variable의 이름 일 때, 사용 가능
      content,
      isDone : false,
      createDate : new Date().getTime()
    }

    //배열에 추가 - 기존 배열(todo)의 맨 앞(...)에 추가
    setTodo([newItem, ...todo]);
    idRef.current +=1; //추가 후 +1 해서 다음 칸에 값 넣을 준비

  }

  
  //CheckBox상태 변화(isDone) method : True -> False / False -> True
  const onUpdate = (targetId) => 
  {
    console.log("update func.");
    console.log(targetId);

    // id값 찾아서 isDone 상태를 보고 True -> False / False -> True
    setTodo (
      //배열 전체를 탐색하고 매개변수로 it라는 객체를 사용한다.  
      todo.map( (it) =>
        //탐색중 확인한 id랑 선택한 목록의 id랑 같다면, isDone의 상태를 반대로 바꾼다.(True -> False / False -> True) 그렇지 않으면 그냥 그대로 둔다.
        it.id === targetId ? {...it, isDone : !it.isDone} : it
      )
    )

  }

  //목록 삭제 method
  const onDelete = (targetId) =>
  {
    console.log("delete func.");
    console.log(targetId);

    
    setTodo
    (
      //todo 배열에서 it라는 parameter를 이용해
      todo.filter((it)=>
      
        // it의 id field가 targetId의 field와 일치하지 않는 element들만 새로운 배열에 담는다.
        // 선택된 element는 삭제된 것, 선택되지 않은 element들은 살아남은 것
        it.id !== targetId
      )
    );
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
      


    </div>
  );
}

export default App;

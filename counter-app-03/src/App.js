import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState } from 'react';

function App() {

  //useState는 App.js에 생성 - 변경된 상태를 props를 통해 전송
  const [count, setCount] = useState(0);

  //props를 통해 호출된 함수 코팅
  //기존의 count에서 value로 input 받는 값을 더해서 setCount에 수정
  // handleSetCount = props이름
  const handleSetCount = (value) =>
  {
    setCount(count+value);
  }

  const name = 'aaa';
  const age = '20';

  return (
    <div className="App">
      <h1>Count App.</h1>
      <hr />
      <section> <Viewer count = {count} name={name} age={age}/> </section>
      <section> <Controller handleSetCount = {handleSetCount}/> </section>
    </div>
  );
}

export default App;

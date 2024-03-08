import './App.css';
import { useState } from 'react';

function App() {

  let name ='F-22A Raptor';

  // useState 선언 Block
  // number변수는 button click시 random함수에서 임의의 정수값을 저장하는 변수
  // numberStyle변수는 number변수의 값이 짝수일 때 blue, 홀수일 때 red
  const [number, setNumber] = useState(0);
  const [numberStyle, setNumberStyle] = useState({color:'Blue'});


  /*
  JavaScript에서 함수 호출하는 3가지 방법 : ES6에서 새롭게 추가된 Arrow Func.
  
  1. 기본함수 선언
  function 함수이름(){실행 code 작성}

  2. 객체형식으로 선언
  const 함수이름 = function() {실행 code 작성}

  3. Arrow Function
  const 함수이름 = (매개변수) => {실행 code 작성}

  */

  //버튼 클릭시 작동되는 함수
  const clickEventHandler = () => 
  {
    console.log("FOX2")
    //Random Function 사용해서 임의의 값을 생성
    let num = Math.random()*100;
    num = Math.floor(num); //소숫점 이하 버림  

    //생성된 값이 양수 = 파랑, 음수 = 빨강
    setNumberStyle({color:'Blue'});
    console.log(num);

    //1=T(0.5이상), 0=F(0.5미만)
    if(Math.floor(Math.random()*2))
    {
      num=-num;
      setNumberStyle({color:'Red'});
      console.log(num);
    }

    setNumber(num);
    
  }


  return (


    <div className="App">
        
    <h1>Hello, {name}</h1>
    
    <hr />

    <p style={numberStyle}>
      Number : {number}
    </p>

    <button onClick={clickEventHandler}>Click</button>

    <hr />

    <div style={{color:'red', padding:20}}>
      jsx Block에서 In-Line Style적용
    </div>


    </div>


  );





}

export default App;

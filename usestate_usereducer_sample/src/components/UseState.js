import React from 'react';
import { useState } from 'react';

function UseState(props) {

    //useState() : State(Dynamic Data) 자동 rendering
    //props를 사용해서 Parent Component -> Child Component 방향으로 Rendering
    //여러 Event에 대한 함수를 매번 만들어야함 = code 양↑ -> 줄이기 위해서 사용하는 게 useReducer
    
    //useState delclare
    const [count, setCount] = useState(0);

    //각각의 Event에 대해서 함수 호출 후 기존의 count에 값을 수정 후 setCount에 값 넣기
    // Event多 = code 수↑
    const add1 = () => 
    {
        setCount(count+1);
    }

    const add10 = () => 
    {
        setCount(count+10);
    }

    const add100 = () => 
    {
        setCount(count+100);
    }

    const add1000 = () => 
    {
        setCount(count+1000);
    }

    return (
        <div>
            <div><h1>{count}</h1></div>        
            <button onClick={add1}>+1</button>
            <button onClick={add10}>+10</button>
            <button onClick={add100}>+100</button>
            <button onClick={add1000}>+1000</button>
        </div>
    );
}

export default UseState;
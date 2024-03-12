import React, { useState } from 'react';
import { useEffect } from 'react';


function UseEffect(props) {

    
    useEffect(()=>{console.log("mount시 작동")});
    
    useEffect(()=>{console.log("1번만 실행")}, []);
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect
    (
        ()=>{console.log("count, name 상태 변경되면 작동")},
        [count, name]
    )

    const countChange = () => 
    {
        setCount(count+1);
    }

    const nameChange = () =>
    {
        setName("F-16 Fighting Falcon" + (count+1));
    }

    return (
        <div>
            <h1>useEffect 예제 : 작동방법 3가지</h1>
            <hr />
            <h1>count : {count}</h1>
            <h1>name : {name}</h1>
            <hr />
            <button onClick={countChange}>count 수정</button>
            <button onClick={nameChange}>name 수정</button>
        </div>
    );
}

export default UseEffect;
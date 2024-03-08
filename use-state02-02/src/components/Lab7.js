import React from 'react';
import { useState } from 'react';

function Lab7(props) {

    //useState Hook : 상태값이 변경될 때, 자동으로 Rendering
    //useState에서 사용하는 변수 : all data type - boolean, string, object, array(one of object) etc
    const [inputValue, setInputValue] = useState("");

    //input 박스의 값이 수정되면 호출하는 함수 = onChange
    //() = 수정된 값을 받는 element
    const onChangeHandler= (e) => 
    {
        console.log("Success")
        setInputValue(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Lab07 - JSX에서 input form 만들고 user가 입력한 값을 form box랑 console에 출력 - 굉장히 많이 쓰는 내용</h1>
            {/* inputValue -> onChangeHandler -> setInputValue(e.target.value) -> inputValue*/}
            <input value={inputValue} onChange={onChangeHandler}/>
        </div>
    );
}

export default Lab7;
import React from 'react';
import { useState } from 'react';

function Lab8(props) {

    //MOCK Data = 가짜 데이터, 프로그래밍에서 기본값 출력
    const [JetFighters, setJetFighters] = useState(['F-16 Fighting Falcon', 'F-15 Eagle', 'F-22 Raptor']);

    //상태 변경시 자동 rendering 되도록 useState 사용
    const [inputValue, setInputValue] = useState("");

    //함수 생성
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    //버튼 클릭시 작동 함수
    const onClickHandler = (e) => {
        // input box의 value를 setJetFighters를 사용해서 array에 value 추가 시 자동으로 rendering
        // ES6에서 새로 추가된 문법 = [...JetFighter, 추가할 값] / 기존에 push, put, shift 등 사용하다가 이번에 새로 나온 것 - 기존 배열에서 마지막에 값 추가시 사용
        setJetFighters([...JetFighters, inputValue]);

        //inputBox의 value 초기화
        setInputValue("");
    }

    return (
        <div>
            <h1>Lab8 - button사용해서 InputBox에 넣은 값d을 받아서 tag 생성한 뒤 추가</h1>

            <input value={inputValue} onChange={onChangeHandler}/>

            <button onClick={onClickHandler}>ADD</button>
            
            <ul>
                {
                    JetFighters.map((JetFighter, index) => {
                        return <li key={index}>{JetFighter}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Lab8;
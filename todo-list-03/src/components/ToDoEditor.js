import React from 'react';
import './ToDoEditor.css';
import { useState, useRef } from 'react';


//onCreate를 부모 Component로 전송
function ToDoEditor({onCreate}) {

    //useDate 사용 - 자주 사용
    const [content, setContent] = useState(''); 
    
    //input box의 값 수정 시 호출
    const onChangeContent = (e) => 
    {
        setContent(e.target.value);
    }


    //component 생성(mount) 이후에 초기값이 할당
    const inputRef = useRef();


    //onKeyDown = 13(Enter)
    const onKeyDown = (e) =>
    {
        //Event로 Enter가 들어왔을 때(키보드에서 Enter치면)
        if(e.keyCode === 13)
        {
            onSubmit();
        }
    }

    //input value를 Parent Component에게 전달
    const onSubmit = () => 
    {
        console.log("Transfer");
        
        //값 초기화 & Focus 위치를 해당 위치로 이동
        if(!content)
        {
            inputRef.current.focus();
            return;
        }

        //App(Parent Component)에게 onCreate()라는 props를 호출
        onCreate(content);
        setContent('');
    }

    //value={content} -> 자주 쓴다.

    return (
        <div className="ToDoEditor">
            <h4>Aircraft ✈🛫🛬🛩</h4>
            <div className="editor_wrapper">

                <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='새로운 기체 추가'/>

                <button onClick={onSubmit} //onSubmit = Event
                >추가</button>

            </div>
        </div>
    );
}

export default ToDoEditor;
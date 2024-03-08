import React from 'react';
import { useState, useRef } from 'react';


//onCreate를 부모 Component로 전송
function ToDoEditor({onCreate}) {

    //useDate 사용
    const [content, setContent] = useState(''); 
    
    //input box의 값 수정 시 호출
    const onChangeContent = (e) => 
    {
        setContent(e.target.value);
    }

    //component 생성(mount) 이후에 초기값이 할당
    const inputRef = useRef();


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

    return (
        <div>
            <h4>새로운 ToDo 작성</h4>
            <div>
                <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='새로운 할 일 작성'/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default ToDoEditor;
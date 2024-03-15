import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import {DiaryDispatchContext} from '../App';
import Editor from '../components/Editor';

function New(props) {

    const navigate = useNavigate();

    const {onCreate} = useContext(DiaryDispatchContext); //onCreate가 dispatch로 전송

    //onSubmit을 통해 올라온 State를 받은 게 매개변수(data)
    const onSubmit = (data) => 
    {
        console.log("글쓰기 호출됨");

        const {date, content, emotionId} = data; //구조분해할당 - data에 있는 객체들을 꺼내서 사용 id를 통해서 객체의 필드의 값을 새로운 변수에 할당

        onCreate(date, content, emotionId); //하위에 있는 Context받아서 onCreate 이용해서 상위 Component로 이동


        navigate('/', {replace: true}); // 전송 후 메인으로 이동
    }

    return (
        <div>
            <Header 
            title="새 일기 쓰기" 
            leftChild={<Button text=" < 뒤로가기" 
            type="positive" 
            onClick={()=>{navigate(-1)}}/>}/>

            <Editor onSubmit={onSubmit}/>
        </div>

    );
}

export default New;
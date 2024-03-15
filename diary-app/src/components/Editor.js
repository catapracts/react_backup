import React, { useState } from 'react';
import './Editor.css';
import {emotionList, getFormattedDate} from '../util';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


function Editor({initData, onSubmit}) {

    const navigate = useNavigate();

    const [state, setState] = useState({
        date : getFormattedDate(new Date()), 
        emotionId : 3, 
        content : " ",
    });


    const handleChangeEmotion = (e) => 
    {
        setState({...state, emotionId:e});
    }
    
    const handleChangeContent = (e) =>
    {
        setState({...state, content:e.target.value});
    }

    const handleSubmit = () =>
    {
        onSubmit(state);
    }

    const handleChangeDate = (e) =>
    {
        setState(
            {...state, date:e.target.value});
    }

    return (
        <div className="Editor">
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper">

                <input type="date" value={state.date}
                    onChange={handleChangeDate}
                />
            </div>

            <div className="editor_section">
                <h4>오늘의 감정</h4>

                <div className="input_wrapper emotion_list_wrapper">
                    {
                        emotionList.map((it) => ( 
                        <EmotionItem key={it.id} {...it} 
                        onClick={handleChangeEmotion} 
                        isSelected={state.emotionId===it.id}
                        />
                    ))}
                </div>
            </div>

            
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea placeholder='오늘 하루는 어땠나요?' value={state.content} onChange={handleChangeContent}  />
                </div>
            </div>

            
            <div className="editor_section bottom_section">
                
                <Button text={"취소하기"} type="negative" onClick={()=>{navigate('/',{replace:true})}}/>
                <Button text={"작성완료"} type="positive" onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default Editor;
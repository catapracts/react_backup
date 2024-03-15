import React from 'react';
import './Editor.css';
import {emotionList} from '../util';
import EmotionItem from './EmotionItem';


const handleChangeEmotion = () => 
{
    console.log("Editor : handleChangeEmotion")
}


function Editor() {
    return (
        <div className="Editor">
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper"> 
                <input type="date"/>
            </div>

            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {
                        emotionList.map((it) => <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion} isSelected={true}/>
                    )}
                </div>
            </div>

            <div className="editor_section"></div>
            <div className="editor_section bottom_section"></div>
        </div>
    );
}

export default Editor;
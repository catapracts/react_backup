import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function New(props) {
    return (
        <div>
            <Header 
            title="새 일기 쓰기" 
            leftChild={<Button text=" < 뒤로가기" 
            type="positive" 
            onClick={()=>{console.log("뒤로가기")}}/>}/>

        </div>
    );
}

export default New;
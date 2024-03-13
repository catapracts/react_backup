import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';


function Diary(props) {
    return (
        <div>
            <Header 
            title="240313 상세내용" 
            leftChild={<Button text=" < 뒤로가기" 
            type="negative" 
            onClick={()=>{console.log("뒤로가기")}}/>}

            
            rightChild={<Button text="수정하기" 
            type="positive" 
            onClick={()=>{console.log("수정하기")}}/>}


            />
        </div>
    );
}

export default Diary;
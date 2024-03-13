import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function Edit(props) {
    return (
        <div>
            <Header 
            title="일기 수정" 
            leftChild={<Button text=" < 뒤로가기" 
            type="negative" 
            onClick={()=>{console.log("뒤로가기")}}/>}

            
            rightChild={<Button text="삭제하기" 
            type="negative" 
            onClick={()=>{console.log("삭제하기")}}/>}
            />
        </div>
    );
}

export default Edit;
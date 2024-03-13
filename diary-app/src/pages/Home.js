import React, { useContext } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import {DiaryStateContext} from '../App';

function Home(props) {

    // Context Provider에서 내려보내주는 상태 값을 불러온다 = useContext from App.js
    // MOCKData안에 있는 객체 3개를 data로 내려보낸다.
    // DiaryStateContext가 export되어있어야 사용 가능
    // useContext나 useReucer사용하면 child component
    const data = useContext(DiaryStateContext);


    return (
        <div>
            <Header 
            title="240313" 
            leftChild={<Button text={"<"} type="positive" onClick={()=>{console.log("왼쪽 버튼 클릭")}}/>} 
            rightChild={<Button text={">"} type="negative" onClick={()=>{console.log("오른쪽 버튼 클릭")}}/>}
            />

            <DiaryList data={data}/>
        </div>
        
    );
}

export default Home;
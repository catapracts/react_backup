import React from 'react';
import { useParams } from 'react-router-dom';


function Edit(props) {

    const {id} = useParams();

    return (
        <div>
            <h1>수정페이지 </h1>
            <hr />
            <p>오신 것을 환영합니다.</p>
            
            <p>useParams로 넘어오는 변수 값 출력</p>
            <h1>{id}</h1>

        </div>
    );
}

export default Edit;
import React from 'react';

function Viewer(props) {

    //Controller Component - button을 click시 value출력하는 component


    return (
        <div>
             <div>현재 카운터 : </div>
            <h1>{props.count}</h1>
            <hr />

            <h3>{props.name}</h3>
            <h3>{props.age}</h3>

            
        </div>
    );
}

export default Viewer;
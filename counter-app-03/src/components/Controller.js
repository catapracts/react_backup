import React from 'react';

function Controller({handleSetCount}) {

    return (
        <div>
            <button onClick={()=>{handleSetCount(-100)}}>-100</button> {/*onClick={()=>{props(매개변수)}} */}
            <button onClick={()=>{handleSetCount(-10)}}>-10</button>
            <button onClick={()=>{handleSetCount(-1)}}>-1</button>
            <button onClick={()=>{handleSetCount(+1)}}>+1</button>
            <button onClick={()=>{handleSetCount(+10)}}>+10</button>
            <button onClick={()=>{handleSetCount(+100)}}>+100</button>
        </div>
    );
}

export default Controller;
import React from 'react';
import { useReducer } from 'react';


//외부에 정의
const reducer = (count1, action) =>
{
    switch(action.type)
    {
        case 1 : 
         return count1 +1;
        
        case 10 : 
            return count1 +10;
        
        case 100 : 
            return count1 +100;
        
        case 1000 : 
            return count1 +1000;
        
        default : 
            return count1;

    }
}



function UseReducer(props) {

    //dedlare useReducer() / dispatch = setter
    const[count1, dispatch] = useReducer(reducer, 0);

    return (
        <div>

            <div><h1>{count1}</h1></div>
            <button onClick = { () => dispatch({type:1})}>+1</button>
            <button onClick = { () => dispatch({type:10})}>+10</button>
            <button onClick = { () => dispatch({type:100})}>+100</button>
            <button onClick = { () => dispatch({type:1000})}>+1000</button>
        </div>
    );
}

export default UseReducer;
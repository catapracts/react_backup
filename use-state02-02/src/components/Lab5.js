import React from 'react';

function Lab5(props) {
    const JetFightersName = ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-22 Raptor']
    
    //배열 안에 값을 꺼내면서 고유번호(index) 할당
    const JetFighters = JetFightersName.map( (JetFighter, index) => 
    {
        return <li key={index}> {JetFighter} </li>
    });

    return (
        <div>
            <h1>Lab5 - map()사용 - 고유key 생성하면서 출력</h1>
            <ul>{JetFighters}</ul>
        </div>
    );
}

export default Lab5;
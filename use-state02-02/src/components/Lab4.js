import React from 'react';

function Lab4() {
    
    const JetFightersName = ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-22 Raptor']
    
    //JetFightersName안에 있는 값들을 JetFighter라는 변수에 넣고 <li>에 넣은
    //다음 JetFighters하는 배열안에 저장한다.
    const JetFighters = JetFightersName.map( (JetFighter) => 
    {
        return <li>{JetFighter}</li>
    });

    return (
        <div>
            <h1>Lab4 - map()사용 - 앞으로 자주 사용함</h1>
            <ul>
                {JetFighters}
            </ul>
        </div>
    );
}

export default Lab4;
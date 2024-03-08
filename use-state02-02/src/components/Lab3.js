import React from 'react';

function Lab3() {
    //배열 값만 적용된 상태
    const JetFightersName = ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-22 Raptor']

    //배열만 선언
    const JetFighters = [];

    //for문 이용해서 Element 생성해서 JetFighters에 등록
    for(let i = 0; i<JetFightersName.length; i++)
    {
        JetFighters.push(<li>{JetFightersName[i]}</li>);
    }

    return (
        <div>
            <h1>Lab3 - for문 이용해서 Output</h1>
            <ul>
                {JetFighters}
            </ul>
        </div>
    );
}

export default Lab3;
import React from 'react';

function Lab6() {
    
    const JetFightersName = ['F-16 Fighting Falcon', 'F-15 Eagle', 'F-22 Raptor']


    return (
        <div>
            <h1>Lab6 - JSX Block에서 바로 map으로 처리</h1>
            <ul>
                {
                    JetFightersName.map( (JetFighter, index) => 
                    {
                        return <li key={index}>{JetFighter}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Lab6;
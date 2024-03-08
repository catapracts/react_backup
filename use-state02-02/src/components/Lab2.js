import React from 'react';

function Lab2() {
    //tag를 Array에 넣고, Array를 출력
    const JetFighter = [<li>F-16 Fighting Falcon</li>, 
    <li>F-15 Eagle</li>, 
    <li>F-22 Raptor</li>]
    return (
        <div>
            <h1>Lab2 - Array에 Element를 적용해서 Array Output</h1>
            <ul>{JetFighter}</ul>
        </div>
    );
}

export default Lab2;
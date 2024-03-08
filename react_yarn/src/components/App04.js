import React from "react";
function App04()
{
    const name = 'F-22A Raptor';

    //&& - short circuit replaced 3항 연산자(ternary operator or Conditional operator)
    return (
        <div>
            {name === 'F-22A Raptor' && (<h1>FOX2</h1>)}
        </div>
    );
}

export default App04;
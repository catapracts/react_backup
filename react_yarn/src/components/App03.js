function App03()
{
    //js block
    const name = 'Banana';

    //JSX Block - 3항 연산자, &&, ||
    return (
        <div>
            {name==='Banana' ? (<h1>ananaB</h1>) : null}
        </div>
    );
}

export default App03;
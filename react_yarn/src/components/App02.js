export default function App02(){
    const name = 'orange';

    return (
        //comment
        <div //comment
        >
            {/*comment*/}
            <hr/>
            {
              name === 'orange' ? <h1>orange</h1> : <h1>Apple</h1>
            }
        </div>
    );
}

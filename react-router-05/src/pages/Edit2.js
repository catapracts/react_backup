import React from 'react';
import { useSearchParams } from 'react-router-dom';


function Edit2(props) {

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode");

    return (
        <div>
            <h1>Edit2 Component : Query String</h1>
            <p>오신 것을 환영합니다.</p>

            <h1>Query String으로 넘어오는 id : {id}</h1>
            <h1>Query String으로 넘어오는 mode : {mode}</h1>
            <h1>Query String으로 넘어오는 Output : {searchParams}</h1>
        </div>
    );
}

export default Edit2;
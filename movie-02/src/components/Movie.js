import React from 'react';

//props = 외부에서 component 호출 시 주입되는 값
//poster_path, title, vote_average Dummy로부터 3개 값(props안에 3개 값) 받는다.


function Movie({title, poster_path, vote_average}) {

    //영화 정보 제공해 주는 사이트URL
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

    return (
        <div className="movie-container">
            <img src = {IMG_BASE_URL + poster_path} alt='Movie Poster'/>
            <div className="movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    );
}

export default Movie;
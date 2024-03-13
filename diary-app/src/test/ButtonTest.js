import React from 'react';
import Button from '../components/Button';
import { getEmotionImgById } from '../util';


function ButtonTest(props) {
    return (
        <div>
            <h1>Button Test</h1>
            <div> <Button text = "기본버튼" type="default"></Button> </div>
            <div> <Button text = "Positive버튼" type="positive"></Button> </div>
            <div> <Button text = "Negative버튼" type="negative"></Button> </div>

            <div>
                <img src={getEmotionImgById(1)} alt='image1'/>
                <img src={getEmotionImgById(2)} alt='image2'/>
                <img src={getEmotionImgById(3)} alt='image3'/>
                <img src={getEmotionImgById(4)} alt='image4'/>
                <img src={getEmotionImgById(5)} alt='image5'/>
            </div>
        </div>
    );
}


export default ButtonTest;
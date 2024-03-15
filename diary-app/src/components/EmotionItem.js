import React from 'react';
import './EmotionItem.css';

// 새 일기쓰기에서 emotionList의 배열의 객체 5개 출력
function EmotionItem({id, name, img, onClick, isSelected}) {

    // 5개 중 1개 선택되면 처리 시작
    const handleOnClick = () => 
    {
        onClick(id);
    }

    return (
        //image 5개
        <div 
        className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : 'EmotionItem_off'].join(" ")}
        onClick={handleOnClick}
        >
            
            {/* 오늘의 감정 선택 시 선택되면서 배경색이랑 같이 적용됨 */}
            <img alt={`emotion${id}`} src = {img} />
            <span>{name}</span>

        </div>
    );
}

export default EmotionItem;
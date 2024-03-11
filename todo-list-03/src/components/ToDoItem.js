import React from 'react';
import './ToDoItem.css';

// props 6개 - State 4개(MOCKDate의 field값) + Event 2개
// id, content, isDone, createDate -> Parent Component로부터 내려오는 State
// onUpdate, onDelete -> Parent Component로 보내는 Event
function ToDoItem({id, content, isDone, createDate, onUpdate, onDelete}) {

    //onUpdate : ToDoItem에서 발생되는 Event - CheckBox 선택 & 해제
    const onClickUpdate = () => 
    {
        onUpdate(id);

    }


    //onDelete : Button click하면 삭제 처리
    const onClickDelete = () =>
    {
        onDelete(id);
    }


    return (
        <div className="ToDoItem">
            <div className="checkbox_col"><input type="checkbox" onChange={onClickUpdate} checked={isDone} /></div>

            <div className="title_col">{content}</div>

            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>

            <div className="btn_col"><button onClick={onClickDelete}>삭제</button></div>
        </div>
    );
}

export default ToDoItem;
import React from 'react';
import ToDoItem from './ToDoItem';


//props 3개
//todo = object가 담긴 array : App에서 내려온 것
function ToDoList({todo, onUpdate, onDelete}) {
    return (
        <div>
        {
            todo.map( (it) => {

             return <ToDoItem
            //todo안에 담을 것들
            id={it.id} 
            content={it.content} 
            isDone={it.isDone} 
            createDate={it.createDate}

            //Item에서 올라온 것들
            onUpdate={onUpdate} 
            onDelete={onDelete}
            />
            
            })
}
        </div>
    );
}

export default ToDoList;
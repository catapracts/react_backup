// import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';
import { useState } from 'react';


//props 3개
//App - ToDoList - ToDoItem
//todo = object가 담긴 array : App에서 내려온 것
//ToDoItem(Component)에 props를 전달하는 중이다.
function ToDoList({todo, onUpdate, onDelete}) {

    //검색기능 추가
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => 
    {
        setSearch(e.target.value);
    }

    //검색어처리함수 - todo.filter() == array값을 filter해서 새로운 배열에 저장
    //todo안의 object를 it로 꺼낸 다음 배열로 return
    const getSearchResult = () =>
    {
        return search==="" ? todo : todo.filter( (it) => 
        
            it.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
    }


    return (
        <div className='ToDoList'>
            <h4>Aircraft List 🛩✈🛫🛬</h4>

            {/*검색기능추가 - 자주 쓰게될 input Box형태*/}
            <input
                value={search}
                onChange={onChangeSearch}
                className='SearchBar'
                placeholder='검색어 입력'
            />


            <div className='list_wrapper'>
            {
                
                // todo.map( (it) => {

                // return <ToDoItem
                // //todo안에 담을 것들
                // key={it.id}
                // id={it.id} 
                // content={it.content} 
                // isDone={it.isDone} 
                // createDate={it.createDate}

                // //Item에서 올라온 것들
                // onUpdate={onUpdate} 
                // onDelete={onDelete}
                // />
            
                // })
            }

            {/*검색어 사용해서 처리*/}

            {
                getSearchResult().map( (it) => 
                
                    <ToDoItem
                    key={it.id}
                    id={it.id}
                    content={it.content}
                    isDone={it.isDone}
                    createDate={it.createDate}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    />
                )
            }
            </div>
        </div>
    );
}

export default ToDoList;
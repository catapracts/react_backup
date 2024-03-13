import React from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';

function DiaryList({data}) {
    return (
        <div className="DiaryList">

            <div className="menu_wrapper">

                <div className="left_col">
                    <select>
                        <option value="newer">최신순</option>
                        <option value="older">오래된순</option>
                    </select>
                </div>

                <div className="right_col">
                    <Button text={"새 글쓰기"} type={"positive"} onClick={()=>{console.log("새 글쓰기")}}/>
                </div>

            </div>

            <div className="list_wrapper">
                {
                    data.map((it) => <DiaryItem key={it.id} {...it} />)
                }
            </div>

        </div>
    );
}

export default DiaryList;
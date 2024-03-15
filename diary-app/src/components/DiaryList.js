import React from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';

function DiaryList({data}) {

    
    const navigate = useNavigate();



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
                    <Button text={"새 글쓰기"} type={"positive"} onClick={()=>{navigate('/new')}}/>
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
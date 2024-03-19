import React, { useState, useEffect } from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';

function DiaryList({data}) {


    //월별로 filter된 일기 객체가 저장된 배열, 날짜별로 정렬X [{일기1},{일기2},...]
    
    const navigate = useNavigate();

    // Select의 Option의 value, name을 저장하는 배열
    const sortOptionList = [{value : "latest", name : "최신순"}, {value : "oldest", name : "오래된순"}];

    // 정렬type 저장 state
    const [sortType, setSortType] = useState("latest");

    // 정렬type에 따라 객체 정렬해서 배열에 저장[{},{},...]
    const [sortData, setSortData] = useState([]);

    // sortOptionList -> onChangeSortType ->
    const onChangeSortType = (e) => 
    {
        setSortType(e.target.value); //sortOptionList에서 하나 들어온다.
        console.log(e.target.value);
    }

    //useEffect : sortType에 따라 sort data를 수정하는 hook - state 변경된 이후 다른 작업 자동 처리
    //DiaryList 처음 rendering시, 의존성 배열값이 수정될 때, 함수 작동
    useEffect(
        () => {
            //input으로 받은 객체의 날짜를 비교해서 return
            const compare = (a,b) => {
                if(sortType === "latest")
                {
                    return Number(b.date) - Number(a.date); // 최신 순으로 정렬 후 return
                }

                else
                {
                    return Number(a.date) - Number(b.date); // 오래된 순으로 정렬 후 return
                }
            }
            
            //compare함수의 인자로 값을 정렬해서 원본 일기 저장하는 배열의 값을 JSON형식으로 저장 후, 자바의 객체로 변환
            //JSON.stringify(JS객체) : JS객체를 JSON형식으로 변환하는 method(직렬화) / 객체 = memory에 있는 값 = 얘 자체만으로는 네트워크를 통해서 전송 불가능 -> 네트워크를 통해서 전송가능하도록 형식을 변환해야함
            //JSON.parse(JSON파일) : JSON파일을 JS객체로 변환하는 method(역직렬화) / 네트워크를 통해서 들어온 JSON파일을 RAM에서 사용가능한 형태로 변환
            //직렬화 - Memory(RAM)에 있는 객체를 네트워크를 통해서 전송가능하도록 형식을 변환하는 행위 / JS객체 = 해당 System에서만 사용 가능
            const copyList = JSON.parse(JSON.stringify(data));

            //copyList에 정렬된 배열의 객체가 정렬되어서 들어간다.
            copyList.sort(compare);

            //setSortData에 copyList를 넣기
            setSortData(copyList);

        },
        [data, sortType]
    );


    return (
        <div className="DiaryList">

            <div className="menu_wrapper">

                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}>
                        { 
                            sortOptionList.map((it,idx) => ( //it = object, idx= index
                                    <option key={idx} value={it.value}>{it.name}</option>
                                )
                            )
                        }
                    </select>
                </div>

                <div className="right_col">
                    <Button text={"새 글쓰기"} type={"positive"} onClick={()=>{navigate('/new')}}/>
                </div>

            </div>

            <div className="list_wrapper">
                {
                    sortData.map((it) => <DiaryItem key={it.id} {...it} />)
                }
            </div>

        </div>
    );
}

export default DiaryList;
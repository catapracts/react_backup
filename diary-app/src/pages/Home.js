import React, { useState, useContext, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import {DiaryStateContext} from '../App';
import { getMonthRangeByDate} from '../util';

function Home(props) {

    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const [filteredDate, setfilteredDate] = useState([]); 


    useEffect(
        () => {
           if (data.length >= 1 ) {        

            const { beginTimeStemp, endTimeStemp} = getMonthRangeByDate(pivotDate); 


            setfilteredDate (
                data.filter(
                    (it) => beginTimeStemp <= it.date && it.date <= endTimeStemp
                ) 
            ); 
           } 
        } , [data, pivotDate]
    ); 


    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`

    const onDecreaseMonth = () => 
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1) )
    }

    const onIncreaseMonth = () => 
    {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1) )
    }

    return (
        <div>
            <Header
            title= {headerTitle}
            leftChild={<Button text={"<"} type="positive" onClick={onDecreaseMonth}/>} 
            rightChild={<Button text={">"} type="negative" onClick={onIncreaseMonth}/>}
            />

            <DiaryList data={filteredDate}/>
        </div>
        
    );
}

export default Home;
import React, {useEffect, useState} from 'react';
import './App.css';
import {RightTablo} from "./component/RightTablo/RightTablo";
import {LeftTablo} from "./component/LeftTablo/LeftTablo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {increaseNumAC, resetNumAC, setMaxNumAC, setStartNumAC} from "./bll/counterReducer";


function App() {

    const value = useSelector<AppRootStateType, number>(state => state.counter.num);
    const startNum = useSelector<AppRootStateType, number>(state => state.counter.startValue);
    const maxNum = useSelector<AppRootStateType, number>(state => state.counter.maxValue);
    const dispatch = useDispatch();

    const [num, setNum] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('Max value')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Max value', JSON.stringify(maxNum))
    }, [maxNum])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('Start value')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Start value', JSON.stringify(startNum))
    }, [startNum])

    useEffect(() => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
    }, [value])


    const setButton = () => {

        dispatch(setStartNumAC(startNum))
        dispatch(setMaxNumAC(maxNum))

    }

    const onClickInc = () => {
        if (value < maxNum)
            dispatch(increaseNumAC())
    }
    const onClickReset = () => {
        dispatch(resetNumAC(startNum))
    }

    const onChangeMax = (maxNum: number) => {
        if (maxNum > 0 && maxNum > startNum) {
            dispatch(setMaxNumAC(maxNum))
            setError('')
        } else {
            setError('Incorrect value!')
        }

    }
    const onChangeStart = (startNum: number) => {
        if (startNum >= 0 && startNum < maxNum) {
            dispatch(setStartNumAC(startNum))
            setError('')
        } else {
            setError('Insert new value and press Set')
        }

    }

    return (

        <div className={'App'}>
            <div className={'left'}>
                <LeftTablo
                    maxValue={maxNum}
                    startValue={startNum}
                    onChangeMax={onChangeMax}
                    onChangeStart={onChangeStart}
                    error={error}
                    setButton={setButton}
                />
            </div>
            <div className={'right'}>
                <RightTablo
                    number={value}
                    num={startNum}
                    numMax={maxNum}
                    onClickInc={onClickInc}
                    onClickReset={onClickReset}
                    error={error}
                />
            </div>
        </div>


    );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {RightTablo} from "./component/RightTablo/RightTablo";
import {LeftTablo} from "./component/LeftTablo/LeftTablo";


function App() {

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
        localStorage.setItem('Max value', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('Start value')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Start value', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(num))
    }, [num])


    const setButton = () => {
        setNum(num)
        setNum(startValue)
        setMaxValue(maxValue)

    }

    const onClickInc = () => {
        if (num < maxValue)
            setNum(num + 1)
    }
    const onClickReset = () => {
        setNum(startValue)
    }

    const onChangeMax = (maxValue: number) => {
        if (maxValue > 0 && maxValue > startValue) {
            setMaxValue(maxValue)
            setError('')
        } else {
            setError('Incorrect value!')
        }

    }
    const onChangeStart = (startValue: number) => {
        if (startValue >= 0 && startValue < maxValue) {
            setStartValue(startValue)
            setError('')
        } else {
            setError('Insert new value and press Set')
        }

    }

    return (
        <div className={'App'}>
            <div className={'left'}>
                <LeftTablo
                    maxValue={maxValue}
                    startValue={startValue}
                    onChangeMax={onChangeMax}
                    onChangeStart={onChangeStart}
                    error={error}
                    setButton={setButton}
                />
            </div>
            <div className={'right'}>
                <RightTablo
                    number={num}
                    num={startValue}
                    numMax={maxValue}
                    onClickInc={onClickInc}
                    onClickReset={onClickReset}
                    error={error}
                />
            </div>
        </div>

    );
}

export default App;

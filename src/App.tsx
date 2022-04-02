import React, {useState} from 'react';
import './App.css';
import {RightTablo} from "./component/RightTablo";
import {LeftTablo} from "./component/LeftTablo/LeftTablo";


function App() {


    let [num, setNum] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)

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
            setError('ERROR')
        }

    }
    const onChangeStart = (startValue: number) => {
        if (startValue >= 0 && startValue < maxValue) {
            setNum(startValue)
            setStartValue(startValue)
            setError('')
        } else {
            setError('errrrrr')
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

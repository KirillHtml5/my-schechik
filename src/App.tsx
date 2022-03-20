import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Tablo} from "./component/Tablo";
import {IncButton} from "./component/IncButton";
import {ResetButton} from "./component/ResetButton";
import {UniButton} from "./component/UniButton";
import {RightTablo} from "./component/RightTablo";
import {LeftTablo} from "./component/LeftTablo";


function App() {
    const MaxValue = 5;
    const StartValue = 0;

    let [num, setNum] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)

    const onClickInc = () => {
        if (num < maxValue)
            setNum(num + 1)

    }
    const onClickReset = () => {
        setNum(startValue)
    }

    const onChangeMax = (maxValue:number) => {
        setMaxValue(maxValue)
    }
    const onChangeStart=(startValue:number)=>{
        setNum(startValue)
        setStartValue(startValue)
    }

    return (
        <div className={'App'}>
            <div className={'right'}>
                <LeftTablo
                    maxValue={maxValue}
                    startValue={startValue}
                    onChangeMax={onChangeMax}
                    onChangeStart={onChangeStart}
                />
            </div>
            <div className={'right'}>
                <RightTablo
                    number={num}
                    num={startValue}
                    numMax={maxValue}
                    onClickInc={onClickInc}
                    onClickReset={onClickReset}/>
            </div>

        </div>

    );
}

export default App;

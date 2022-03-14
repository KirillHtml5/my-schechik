import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./component/Tablo";
import {IncButton} from "./component/IncButton";
import {ResetButton} from "./component/ResetButton";
import {UniButton} from "./component/UniButton";


function App() {
    const MaxValue = 5;
    const StartValue = 0;
    const [num, setNum] = useState<number>(0)
    const onClickInc = () => {
        if (num < MaxValue)
            setNum(num + 1)

    }
    const onClickReset = () => {
        setNum(StartValue)
    }

    return (
        <div className={'App'}>
            <div className={'tab'}>
                <Tablo number={num}/>
            </div>
            <div className={'uni1'}>
                <UniButton name={'inc'} callBack={onClickInc} disabled={num === MaxValue}/>
                <UniButton name={'reset'} callBack={onClickReset} disabled={num === StartValue}/>
                {/*<IncButton onClickInc={onClickInc} number={num}/>*/}
                {/*<ResetButton onClickReset={onClickReset} number={num}/>*/}
            </div>
        </div>

    );
}

export default App;

import React, {useState} from 'react';
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
            <div className={'right'}>
                <LeftTablo/>
            </div>
            <div className={'right'}>
                <RightTablo
                    num={num}
                    onClickInc={onClickInc}
                    onClickReset={onClickReset}/>
            </div>

        </div>

    );
}

export default App;

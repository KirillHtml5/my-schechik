import React, {ChangeEvent, useState} from 'react';

export const LeftTablo = () => {
    let [maxValue, setMaxValue] = useState<number>(5)

    const setLocal = () => {
        localStorage.setItem('Max value', JSON.stringify(maxValue))
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
    }
    return (
        <div>
            <span>
                Max value:
                <input

                    type={"number"}
                    onChange={onChangeMaxHandler}
                /></span>
            <span>Start value:<input type={"number"}/></span>
            <button onClick={setLocal}>Set</button>
        </div>
    );
};


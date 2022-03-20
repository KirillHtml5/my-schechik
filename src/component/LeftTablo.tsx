import React, {ChangeEvent, useState} from 'react';
export type LeftTabloPropsType={
    maxValue:number
    startValue: number
    onChangeMax:(maxValue:number)=> void
    onChangeStart:(startValue:number)=> void
}
export const LeftTablo = (props:LeftTabloPropsType) => {

    const setLocal = () => {
        localStorage.setItem('Max value', JSON.stringify(props.maxValue))
        localStorage.setItem('Start value', JSON.stringify(props.startValue))

    }
   const onChangeMaxHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        props.onChangeMax(e.currentTarget.valueAsNumber)
   }
    const onChangeStartHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        props.onChangeStart(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <span>
                Max value:
                <input
                    type={"number"}
                    onChange={onChangeMaxHandler}
                />
            </span>
            <span>
                Start value:
                <input
                    type={"number"}
                    onChange={onChangeStartHandler}
                />
            </span>
            <button onClick={setLocal}>Set</button>
        </div>
    );
};


import React, {ChangeEvent} from 'react';
import s from './LeftTablo.module.css'

export type LeftTabloPropsType = {
    maxValue: number
    startValue: number
    onChangeMax: (maxValue: number) => void
    onChangeStart: (startValue: number) => void
    error: string | null
    setButton: () => void
}
export const LeftTablo = (props: LeftTabloPropsType) => {

    // const setLocal = () => {
    //     localStorage.setItem('Max value', JSON.stringify(props.maxValue))
    //     localStorage.setItem('Start value', JSON.stringify(props.startValue))
    //
    // }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax(e.currentTarget.valueAsNumber)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart(e.currentTarget.valueAsNumber)
    }

    return (
        <div className={s.left}>
            <div>
                <span className={s.span}>Max value: </span>
                <input
                    type={"number"}
                    onChange={onChangeMaxHandler}
                    className={props.error ? s.errorInput : s.superInput}
                />
            </div>
            <div>
                <span className={s.span}>Start value: </span>
                <input
                    type={"number"}
                    onChange={onChangeStartHandler}
                    className={props.error ? s.errorInput : s.superInput}
                />
            </div>
            <button onClick={props.setButton} className={s.default}>Set</button>
        </div>
    );
};


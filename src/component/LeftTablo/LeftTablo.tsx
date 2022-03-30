import React, {ChangeEvent} from 'react';

export type LeftTabloPropsType = {
    maxValue: number
    startValue: number
    onChangeMax: (maxValue: number) => void
    onChangeStart: (startValue: number) => void
    error: string | null
}
export const LeftTablo = (props: LeftTabloPropsType) => {

    const setLocal = () => {
        localStorage.setItem('Max value', JSON.stringify(props.maxValue))
        localStorage.setItem('Start value', JSON.stringify(props.startValue))

    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax(e.currentTarget.valueAsNumber)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <div>
                <h3>Max value:</h3>
                <input
                    type={"number"}
                    onChange={onChangeMaxHandler}
                    className={props.error ? 'error' : ''}
                />
            </div>
            <div>
                <h3>Start value:</h3>
                <input
                    type={"number"}
                    onChange={onChangeStartHandler}
                    className={props.error ? 'error' : ''}
                />
            </div>
            <button onClick={setLocal}>Set</button>
        </div>
    );
};


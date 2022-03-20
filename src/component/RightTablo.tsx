import React from 'react';
import {Tablo} from "./Tablo";
import {UniButton} from "./UniButton";

export type RightTabloType = {
    number: number
    num: number
    numMax: number
    onClickInc: () => void
    onClickReset: () => void
    error: string | null
}

export const RightTablo = (props: RightTabloType) => {

    return (
        <div>
            <div className={'tab'}>
                <Tablo number={props.number} numMax={props.numMax} error={props.error}/>
            </div>
            <div>
                <UniButton name={'inc'} callBack={props.onClickInc} disabled={props.number === props.numMax}/>
                <UniButton name={'reset'} callBack={props.onClickReset} disabled={props.number === props.num}/>

            </div>
        </div>
    )
        ;
};


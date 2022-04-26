import React from 'react';
import {Tablo} from "./Tablo";
import {UniButton} from './UniButton';
import s from './RightTablo.module.css'

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
        <div className={s.right}>
            <div className={s.tab}>
                <Tablo number={props.number} numMax={props.numMax} error={props.error}/>
            </div>
            <div>
                <UniButton name={'inc'} callBack={props.onClickInc}
                           disabled={props.number === props.numMax}/>
                <UniButton name={'reset'} callBack={props.onClickReset} disabled={props.number === props.num}/>
            </div>
        </div>
    )
        ;
};


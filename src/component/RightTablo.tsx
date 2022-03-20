import React from 'react';
import {Tablo} from "./Tablo";
import {UniButton} from "./UniButton";

export type RightTabloType = {
    number:number
    num: number
    numMax: number
    onClickInc: () => void
    onClickReset: () => void
}

export const RightTablo = (props: RightTabloType) => {

    return (
        <div>
            <div className={'tab'}>
                <Tablo number={props.number}/>
            </div>
            <div>
                <UniButton name={'inc'} callBack={props.onClickInc} disabled={props.num === props.numMax}/>
                <UniButton name={'reset'} callBack={props.onClickReset} disabled={false}/>

            </div>
        </div>
    )
        ;
};


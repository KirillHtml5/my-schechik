import React from 'react';
import {Tablo} from "./Tablo";
import {UniButton} from "./UniButton";

export type RightTabloType = {
    num: number
    onClickInc: () => void
    onClickReset: () => void
}

export const RightTablo = (props: RightTabloType) => {
    const MaxValue = 5;
    const StartValue = 0;
    return (
        <div>
            <div className={'tab'}>
                <Tablo number={props.num}/>
            </div>
            <div>
                <UniButton name={'inc'} callBack={props.onClickInc} disabled={props.num === MaxValue}/>
                <UniButton name={'reset'} callBack={props.onClickReset} disabled={props.num === StartValue}/>
                {/*<IncButton onClickInc={onClickInc} number={num}/>*/}
                {/*<ResetButton onClickReset={onClickReset} number={num}/>*/}
            </div>
        </div>
    )
        ;
};


import s from './RightTablo.module.css'

type TabloType = {
    number: number
    numMax: number
    error: string | null
}
export const Tablo = (props: TabloType) => {
    return (
        <>
            <div className={props.number === props.numMax ? s.red : s.number}>{props.number}</div>
            {props.error && <div className={s.error}>{props.error}</div>}
        </>

    )
}
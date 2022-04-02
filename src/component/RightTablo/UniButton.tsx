import s from './RightTablo.module.css'

type UniButtonType = {
    name: string
    callBack: () => void
    disabled: boolean

}
export const UniButton = (props: UniButtonType) => {
    return (
        <button className={s.default} onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
    )
}
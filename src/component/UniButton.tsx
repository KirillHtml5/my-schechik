type UniButtonType = {
    name: string
    callBack: () => void
    disabled: boolean

}
export const UniButton = (props: UniButtonType) => {
    return (
        <button className={'default'} onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
    )
}
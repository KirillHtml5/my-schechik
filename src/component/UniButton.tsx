type UniButtonType = {
    name: string
    callBack: () => void
    disabled: boolean

}
export const UniButton = (props: UniButtonType) => {
    return (
        <button onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
    )
}
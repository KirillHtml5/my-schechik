type IncButtonType = {
    onClickInc: () => void
    number: number
}
export const IncButton = (props: IncButtonType) => {
    return (
        <button onClick={props.onClickInc} disabled={props.number === 5}>Inc</button>
    )
}
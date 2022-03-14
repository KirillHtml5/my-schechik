type ResetButton = {
    onClickReset: () => void
    number: number
}
export const ResetButton = (props: ResetButton) => {
    return (
        <button onClick={props.onClickReset} disabled={props.number === 0}>reset</button>
    )
}
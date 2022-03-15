type TabloType = {
    number: number
}
export const Tablo = (props: TabloType) => {
    return (
        <div className={props.number===5?'red':'number'}>{props.number}</div>
    )
}
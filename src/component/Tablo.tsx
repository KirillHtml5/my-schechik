type TabloType = {
    number: number
}
export const Tablo = (props: TabloType) => {
    return (
        <div><h1 className={props.number===5?'red':''}>{props.number}</h1></div>
    )
}
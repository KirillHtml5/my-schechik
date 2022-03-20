type TabloType = {
    number: number
    numMax: number
    error: string | null
}
export const Tablo = (props: TabloType) => {
    return (
        <div className={props.number === props.numMax ? 'red' : 'number'}>
            <div className={props.error ? 'error' : ''}>{props.error ? props.error : props.number}</div>
        </div>
    )
}
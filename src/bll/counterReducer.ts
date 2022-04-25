type IncNum = {
    type: "INCREASE-NUM",
};
type ResetNum = {
    type: "RESET-NUM",
    startValue: number,
};
type SetMaxNum = {
    type: "SET-MAX-NUM",
    maxValue: number,
};
type SetStartNum = {
    type: "SET-START-NUM",
    startValue: number,
};
// type Error = {
//     type: "ERROR",
//     error: string,
// };


type ActionsType = IncNum | ResetNum | SetMaxNum | SetStartNum;

const initialState = {
    num: 0,
}
type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INCREASE-NUM":
            return {...state, num: state.num + 1};
        case "RESET-NUM":
            return {...state, num: action.startValue};
        case "SET-MAX-NUM":
            return {...state, num: action.maxValue};
        case "SET-START-NUM":
            return {...state, num: action.startValue};
        default:
            return state;

    }
    
};

export const increaseNumAC = (): IncNum => {
    return {type: "INCREASE-NUM"};
};
export const resetNumAC = (startValue: number): ResetNum => {
    return {type: "RESET-NUM", startValue};
};
export const setMaxNumAC = (maxValue: number): SetMaxNum => {
    return {type: "SET-MAX-NUM", maxValue};
};
export const setStartNumAC = (startValue: number): SetStartNum => {
    return {type: "SET-START-NUM", startValue};
};

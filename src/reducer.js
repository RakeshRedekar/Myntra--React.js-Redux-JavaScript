
const initialState = {
    data : [],
    gender : "MF",
    color : "",
    folded : "",
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "Gender": 
            return {...state, gender:action.payload}
        case "Color":
            return {...state, color: state.color==""?"white":""}
        case "folded":
            return {...state, folded: state.folded==""?"Y":""}
        default:
            return state;
    }
}

export default reducer;
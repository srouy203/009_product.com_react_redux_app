import actionType from "../action/ProductActionType"
const productInitialstate = {
    products: []
    
}

export const fetchingProductReducer = (state = productInitialstate, action) => {
    switch(action.type){
        case actionType.FETCHING_DATA:
            return{
                ...state,
                products: action.payload,
            }
        default:
            return state
    }
}
export const selectProductReducer = (state = {}, action)=>{
    switch(action.type){
        case actionType.SELECT_DATA:
            return{
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
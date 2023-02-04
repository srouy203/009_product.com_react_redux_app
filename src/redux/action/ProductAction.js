import actionType from './ProductActionType'
export const setData = (data) => {
    return{
        type: actionType.FETCHING_DATA,
        payload: data
    }
}
export const selectData = (data) => {
    return{
        type: actionType.SELECT_DATA,
        payload: data
    }
}

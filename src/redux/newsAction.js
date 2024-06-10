
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'


export const gettingDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}
export const gettingSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}
export const gettingDataFailure = (err) => {
    return {
        type: GET_DATA_FAILURE,
        payload: err
    }
}

export const getdata = () => {
    // const dispatch = useDispatch()
    return async function (dispatch) {

        try {
            dispatch(gettingDataRequest());
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json()
            if (data.length > 0) {
                dispatch({ type: GET_DATA_SUCCESS, payload: data })
            }
            else {

                dispatch({ type: GET_DATA_FAILURE, payload: 'error' })
            }
        }
        catch (error) {
            dispatch({ type: GET_DATA_FAILURE, payload: 'error' })
        }
    }


}

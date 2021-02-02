import Types from "../../ActionTypes/Client/userActionTypes";

const initialState = {
    user : '',
    isLoading: false,
    error : null
}

export const userReducer = (state = initialState, Action) => {
    const { type, payload } = Action
    switch (type) {
        case Types.REGISTER_CLIENT_PROGRESS:
        case Types.LOGIN_CLIENT_PROGRESS:
        case Types.RESET_PASS_PROGRESS:
            return {
                ...state, 
                isLoading : true,
                error : null
            }    

        case Types.LOGIN_CLIENT_SUCCESS:
        case Types.REGISTER_CLIENT_SUCCESS:
            return { 
                ...state, 
                isLoading : false,
                user : payload,
                error : null 
            };
        
        case Types.LOGIN_CLIENT_FAILURE:
        case Types.REGISTER_CLIENT_FAILURE:
            return { 
                ...state, 
                user : null,
                isLoading : false,
                error : payload 
            };  
        
        case Types.RESET_PASS_FAILURE:
            return {
                ...state,
                isLoading : false,
                error : payload
            }
        default:
            return state;
    }
}
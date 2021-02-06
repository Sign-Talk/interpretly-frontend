import Types from "../../ActionTypes/Interpreter/interpreterActionTypes";

const initialState = {
    interpreter : '',
    isLoading: false,
    error : null
}

export const interpreterReducer = (state = initialState, Action) => {
    const { type, payload } = Action
    switch (type) {
        case Types.REGISTER_INTERPRETER_PROGRESS:
        case Types.LOGIN_INTERPRETER_PROGRESS:
        case Types.RESET_PASS_INTERPRETER_PROGRESS:
            return {
                ...state, 
                isLoading : true,
                error : null
            }    

        case Types.LOGIN_INTERPRETER_SUCCESS:
        case Types.REGISTER_INTERPRETER_SUCCESS:
            return { 
                ...state, 
                isLoading : false,
                interpreter : payload,
                error : null 
            };
        
        case Types.LOGIN_INTERPRETER_FAILURE:
        case Types.REGISTER_INTERPRETER_FAILURE:
            return { 
                ...state, 
                interpreter : null,
                isLoading : false,
                error : payload 
            };  
        
        case Types.RESET_PASS_INTERPRETER_FAILURE:
            return {
                ...state,
                isLoading : false,
                error : payload
            }
        default:
            return state;
    }
}
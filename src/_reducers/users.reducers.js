const initialState = {
    first_name: '',
    second_name: '',
    gender: '',
    user_id: '',
    email: '',
    password: '',
    message: '',
    single: null,
    working_technologies: null, 
}

export function signup(state=initialState, action){
    switch (action.type){
        case 'REGISTRATION_SUCCESS':
            return {
                ...state,
                message: action.value,
            };
        case 'REGISTRATION_FAILED':
            return {
                ...state,
                message: action.value
            };
        case 'HANDLE_ON_CHANGE':
            return {
                ...state,
                [action.props]: action.value
            }
        default:
            return state;
    }
}
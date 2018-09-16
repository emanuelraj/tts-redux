const initialState = {
    technologies: []
}

export function technologies(state = initialState, action){
    switch(action.type){
        case 'SETTING_TECHNLOGIES':
            return {
                ...state,
                technologies: action.value
            }
        case 'SETTING_TECHNLOGIES_ERROR':
            return {
                ...state,
                technologies: action.value
            }
        default:
            return state;
    }
}
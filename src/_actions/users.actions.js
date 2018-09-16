
import { apiService } from '../_services/api.services';
import { history } from '../_helpers';

export const userAction = {
    onChangeProps,
    signUp
};

function signUp(paylod){
    return dispatch => {
        const apiEndpoint = 'users';
        apiService.post(apiEndpoint, paylod)
        .then((response)=>{
            dispatch(successfulRegistration(response.message));
            history.push('/signin');
        })
        .catch((response)=>{
            dispatch(failedRegistration(response.message));
        })
    }
}

function onChangeProps(props, event){
    console.log("event ", event);
    console.log("Props ", props);
    if(event.target){
        return dispatch => {
            dispatch(handlePropsChange(props, event.target.value));
        }
    }else if(event.length > 0){
        return dispatch => {
            dispatch(handlePropsChange(props, event));
        }
    }else{
        return dispatch => {
            dispatch(handlePropsChange(props, null));
        }
    }
    
    
}



export function handlePropsChange(props, value){
    return {
        type: 'HANDLE_ON_CHANGE',
        props: props,
        value: value
    }
}

export function successfulRegistration(message){
    return {
        type: 'REGISTRATION_SUCCESS',
        value: message
    }
}

export function failedRegistration(message){
    return {
        type: 'REGISTRATION_FAILED',
        value: message
    }
}

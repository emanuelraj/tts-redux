import { apiService } from '../_services/api.services'

export const technologiesAction = {
    getTechnologies
}

function getTechnologies(){
    return dispatch =>{
        let apiEndpoint = 'technologies'
        apiService.get(apiEndpoint)
        .then((response)=>{
            dispatch(setTechnologies(response.data.data))  
        })
        .catch((response)=>{
            dispatch(setTechnologiesError())
        })
    };
}


export function setTechnologies(technologies){
    return {
        type: 'SETTING_TECHNLOGIES',
        value: technologies
    }
}

export function setTechnologiesError(){
    return {
        type: 'SETTING_TECHNLOGIES_ERROR',
        value: []
    }
}
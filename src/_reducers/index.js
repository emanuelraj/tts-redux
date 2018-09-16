import { combineReducers } from 'redux';

import { signup } from './users.reducers';
import { technologies } from './technologies.reducers';
import { authentication } from './auths.reducer'

const rootReducer = combineReducers({
    signup,
    technologies,
    authentication
})

export default rootReducer;  


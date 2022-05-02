import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import loginReducer from './Login/login.reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default rootReducer;

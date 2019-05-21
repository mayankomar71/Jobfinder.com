import { createStore, combineReducers, applyMiddleware } from 'redux';
import User from './reducers/user_reducer';
import thunk from 'redux-thunk';
import Job from './reducers/job_reducer';

export default createStore(combineReducers({
    user: User,
    jobs:Job,
}), applyMiddleware(thunk));

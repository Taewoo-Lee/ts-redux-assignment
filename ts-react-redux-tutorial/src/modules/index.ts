import { combineReducers } from 'redux';
import todos from './todos';
import github, { githubSage } from './github';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    todos,
    github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
    yield all([githubSage()]);
}
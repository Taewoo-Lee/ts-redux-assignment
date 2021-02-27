import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../../lib/reducerUtils';
import { GithubProfile } from '../../api/github';

export type GithubAction = ActionType<typeof actions>
export type GithubState = {
    userProfile: AsyncState<GithubProfile, Error>
}
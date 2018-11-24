import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { IUserState } from './user-state';

const getUserFeatureState = createFeatureSelector<IUserState>('users');

export const getShowUsername = createSelector(
    getUserFeatureState,
    state => state.showUsername
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

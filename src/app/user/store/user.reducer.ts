import { IUserState, initialUserState } from './user-state';
import { UserActions, UserActionTypes } from './user.actions';

export function reducer(state: IUserState = initialUserState, action: UserActions): IUserState {
    switch (action.type) {
        case UserActionTypes.showUsername:

            return {
                ...state,
                showUsername: action.payload
            };

        default:
            return state;
    }
}

import { IUserState } from './user/store/user-state';

// Representation of the entire app state
// Lazy loaded feature modules extend IAppState within the respective modules so as to not break the lazy load
export interface IAppState {
    user: IUserState;
}

import { IUser } from '../interface/iuser';

export interface IUserState {
    showUsername: boolean;
    currentUser: IUser;
}

// Default state for redux store on app.init
export const initialUserState: IUserState = {
    currentUser: null,
    showUsername: true
};

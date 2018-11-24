import { Action } from '@ngrx/store';

export enum UserActionTypes {
    showUsername = '[User] Show Username'
}

export class ShowUsername implements Action {
    readonly type = UserActionTypes.showUsername;

    constructor(public payload: boolean) {}
}

export type UserActions = ShowUsername;

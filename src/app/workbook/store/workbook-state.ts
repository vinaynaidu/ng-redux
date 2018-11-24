import * as fromRoot from '../../app.state';
import { IWorkbook } from '../interface/workbook';
import { IWorkbookLink } from '../interface/workbook-link';
import { IKeyWorkbook } from '../interface/key-workbook';

// Extends the app state to include the workbook feature.
// This is required because workbooks are lazy loaded.
// So the reference to WorkbookState cannot be added to app.state.ts directly.
export interface State extends fromRoot.IAppState {
    workbooks: IWorkbookState;
}

export interface IWorkbookState {
    currentWorkbookId: number | null;
    error: string;
    favouriteWorkbooks: IWorkbookLink[];
    isFavouriteWorkbookExpanded: boolean;
    isWorkbookHistoryExpanded: boolean;
    keyWorkbooks: IKeyWorkbook[];
    newsletters: IWorkbookLink[];
    workbookHistory: IWorkbookLink[];
    workbooks: IWorkbook[];
}

export const initialState: IWorkbookState = {
    currentWorkbookId: null,
    error: '',
    favouriteWorkbooks: [],
    isFavouriteWorkbookExpanded: true,
    isWorkbookHistoryExpanded: false,
    keyWorkbooks: [],
    newsletters: [],
    workbookHistory: [],
    workbooks: []
};

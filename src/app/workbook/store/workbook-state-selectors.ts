import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IWorkbookState } from './workbook-state';

// Feature Selector
const getWorkbookFeatureState = createFeatureSelector<IWorkbookState>('workbooks');

// Selector Queries
export const getCurrentWorkbookId = createSelector(
    getWorkbookFeatureState,
    state => state.currentWorkbookId
);

export const getError = createSelector(
    getWorkbookFeatureState,
    state => state.error
);

export const getFavouriteWorkbooks = createSelector(
    getWorkbookFeatureState,
    state => state.favouriteWorkbooks
);

export const getIsFavouriteWorkbookExpanded = createSelector(
    getWorkbookFeatureState,
    state => state.isFavouriteWorkbookExpanded
);

export const getIsWorkbookHistoryExpanded = createSelector(
    getWorkbookFeatureState,
    state => state.isWorkbookHistoryExpanded
);

export const getKeyWorkbooks = createSelector(
    getWorkbookFeatureState,
    state => state.keyWorkbooks
);

export const getNewsletters = createSelector(
    getWorkbookFeatureState,
    state => state.newsletters
);

export const getWorkbookHistory = createSelector(
    getWorkbookFeatureState,
    state => state.workbookHistory
);

export const getWorkbooks = createSelector(
    getWorkbookFeatureState,
    state => state.workbooks
);

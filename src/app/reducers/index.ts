import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGlobal from './global.reducer';
import * as fromSearch from './search.reducer';

export interface State {
  global: fromGlobal.State;
  search: fromSearch.SearchState;
}

export const reducers: ActionReducerMap<State> = {
  global: fromGlobal.reducer,
  search: fromSearch.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

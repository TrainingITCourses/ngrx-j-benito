import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSearch from './search.reducer';
import * as fromLaunches from './launches.reducer';
import * as fromData from './data.reducer';

export interface State {
  search: fromSearch.SearchState;
  launches: fromLaunches.LaunchesState;
  data: fromData.DataState;
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
  launches: fromLaunches.reducer,
  data: fromData.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

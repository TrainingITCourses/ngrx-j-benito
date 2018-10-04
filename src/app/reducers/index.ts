import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGlobal from './global.reducer';

export interface State {

  global: fromGlobal.State;
}

export const reducers: ActionReducerMap<State> = {

  global: fromGlobal.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

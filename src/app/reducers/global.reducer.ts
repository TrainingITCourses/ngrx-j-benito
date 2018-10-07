import { Action } from '@ngrx/store';
import { GlobalActions, GlobalActionTypes } from 'app/reducers/global.actions';
import { Criterion } from 'app/models';

export interface State {
  agengies: any[];
  missionTypes: any[];
  statusTypes: any[];
  launches: any[];
  criterion: Criterion;
}

export const initialState: State = {
  agengies: [],
  missionTypes: [],
  statusTypes: [],
  launches: [],
  criterion: null
};

export function reducer(
  state = initialState,
  action: GlobalActions
): State {
  const result = { ...state };
  switch (action.type) {
    case GlobalActionTypes.LoadAgencies:
      result.agengies = action.payload;
      break;
    case GlobalActionTypes.LoadMissionTypes:
      result.missionTypes = action.payload;
      break;
    case GlobalActionTypes.LoadStatusTypes:
      result.statusTypes = action.payload;
      break;
    case GlobalActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
    case GlobalActionTypes.LoadCriterion:
      result.criterion = action.payload;
      break;
    default:
      return state;
  }
  return result;
}

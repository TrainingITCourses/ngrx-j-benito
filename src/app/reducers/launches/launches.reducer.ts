import { LaunchesActionTypes, LaunchesActions } from './launches.actions';

export interface LaunchesState {
  launches: any[];
}

export const initialState: LaunchesState = {
  launches: []
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  const result = { ...state };
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
    default:
      return state;
  }
  return result;
}

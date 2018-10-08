import { DataActions, DataActionTypes } from './data.actions';

export interface DataState {
  agencies: any[];
  missionTypes: any[];
  statusTypes: any[];
}

export const initialState: DataState = {
  agencies: [],
  missionTypes: [],
  statusTypes: []
};

export function reducer(state = initialState, action: DataActions): DataState {
  const result = { ...state };
  switch (action.type) {
    case DataActionTypes.LoadAgencies:
      result.agencies = action.payload;
      break;
      // return { ...state }
    case DataActionTypes.LoadMissionTypes:
      result.missionTypes = action.payload;
      break;
    case DataActionTypes.LoadStatusTypes:
      result.statusTypes = action.payload;
      break;
    default:
      return state;
  }
  return result;
}

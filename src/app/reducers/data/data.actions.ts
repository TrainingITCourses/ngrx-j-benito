import { Action } from '@ngrx/store';

export enum DataActionTypes {
  LoadAgencies = '[Data] Load Agencies',
  LoadMissionTypes = '[Data] Load MissionTypes',
  LoadStatusTypes = '[Data] Load StatusTypes'
}

export class LoadAgencies implements Action {
  public readonly type = DataActionTypes.LoadAgencies;
  constructor(public readonly payload: any[]) {}
}

export class LoadMissionTypes implements Action {
  public readonly type = DataActionTypes.LoadMissionTypes;
  constructor(public readonly payload: any[]) {}
}

export class LoadStatusTypes implements Action {
  public readonly type = DataActionTypes.LoadStatusTypes;
  constructor(public readonly payload: any[]) {}
}
export type DataActions =
  LoadAgencies |
  LoadMissionTypes |
  LoadStatusTypes;

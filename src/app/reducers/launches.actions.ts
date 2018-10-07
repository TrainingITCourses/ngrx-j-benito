import { Action } from '@ngrx/store';

export enum LaunchesActionTypes {
  LoadLaunches = '[Launches] Load Launches'
}

export class LoadLaunches implements Action {
  public readonly type = LaunchesActionTypes.LoadLaunches;
  constructor(public readonly payload: any[]) {}
}

export type LaunchesActions = LoadLaunches;

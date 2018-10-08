import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'app/services';
import { CriterionType, Criterion } from 'app/models';
import { BehaviorSubject, forkJoin } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { LoadAgencies, LoadMissionTypes, LoadStatusTypes } from 'app/reducers/data';
import { LoadCriterion } from 'app/reducers/search';

@Component({
  selector: 'app-launches-criteria',
  templateUrl: './launches-criteria.component.html',
  styleUrls: ['./launches-criteria.component.scss']
})
export class LaunchesCriteriaComponent implements OnInit {
  public isLoaded: boolean;
  public criterionType: CriterionType;
  public criterionResults$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private launchesService: LaunchesService,
              private store: Store<State>) { }

  ngOnInit() {
    forkJoin(
      this.launchesService.getAgencies(),
      this.launchesService.getMissionTypes(),
      this.launchesService.getStatusTypes()
    )
    .subscribe(([agencies, missionTypes, statusTypes]) => {
      this.store.dispatch(new LoadAgencies(agencies));
      this.store.dispatch(new LoadMissionTypes(missionTypes));
      this.store.dispatch(new LoadStatusTypes(statusTypes));
      this.isLoaded = true;
    });
  }

  onCriterionTypeChange(criterionType: CriterionType) {
    this.store.select('data').subscribe(data => {
      this.criterionResults$.next(data[criterionType]);
      this.store.dispatch(new LoadCriterion(null));
      this.criterionType = criterionType;
    });
  }

  onCriterionResultChange(criterionResultId: string) {
    this.store.dispatch(
      new LoadCriterion({
        type: this.criterionType,
        id: Number(criterionResultId)
      } as Criterion)
    );
  }

}

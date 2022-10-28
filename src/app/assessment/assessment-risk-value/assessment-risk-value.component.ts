import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {forkJoin, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {AssessmentService} from "../assessment.service";
import {Patient} from "../../patient/patient";
import {PatientService} from "../../patient/patient.service";
import {AssessmentRiskResult} from "../assessment-risk-result";

@Component({
  selector: 'app-assessment-risk-value',
  templateUrl: './assessment-risk-value.component.html',
  styleUrls: ['./assessment-risk-value.component.scss']
})
export class AssessmentRiskValueComponent implements OnInit {

  patient: Patient | undefined;

  reactiveData$!: Observable<[AssessmentRiskResult, Patient]>;

  constructor(
    private route: ActivatedRoute,
    private assessmentService: AssessmentService,
    private patientService: PatientService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.reactiveData$ = this.route.params.pipe(
      map((params: Params) => params['patientId']),
      switchMap(patientId => forkJoin([
        this.assessmentService.assessById(patientId).pipe(catchError(err => {
          this.snackBar.open(err.error.message);
          this.router.navigate(['/patient']);
          return of(err);
        })),
        this.patientService.getOne(patientId),
      ])),
    );
  }

  backArrow() {
    this.router.navigate(['patient']);
  }
}

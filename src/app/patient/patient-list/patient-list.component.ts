import {Component, OnInit} from '@angular/core';
import {PatientService} from "../patient.service";
import {Patient} from "../patient";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";
import {switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients = new MatTableDataSource;

  readonly displayedColumns: string[] = ['lastName', 'firstName', 'gender', 'birthDate', 'phone', 'address', 'action'];
  private allPatients$: Observable<Patient[]> | undefined;

  constructor(
    private patientService: PatientService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.allPatients$ = this.patientService.getAll().pipe(tap((patients: Patient[]) => this.patients.data = patients));
    this.allPatients$.subscribe();
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {Patient} from "../patient";
import * as moment from "moment/moment";
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  patientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    adress: new FormControl(''),
  });


  constructor(
    private patientService: PatientService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => params['id']),
      switchMap(id => this.patientService.getOne(id)),
    )
      .subscribe((patient: Patient) => this.patientForm.patchValue(patient));
  }

  get firstNameControl(): FormControl {
    return this.patientForm.get('firstName') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.patientForm.get('lastName') as FormControl;
  }

  get genderControl(): FormControl {
    return this.patientForm.get('gender') as FormControl;
  }

  get birthDateControl(): FormControl {
    return this.patientForm.get('birthDate') as FormControl;
  }


  submit(): void {
    if (this.patientForm.valid) {
      const patient = {...this.patientForm.value,
        birthDate: moment(this.patientForm.value.birthDate).format('YYYY-MM-DD'),
        id: this.activatedRoute.snapshot.params['id']
      };
      this.patientService.update(patient).subscribe(() => {
        this.snackBar.open('Patient updated', 'close');
        this.router.navigate(['/patient']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/patient']);
  }
}

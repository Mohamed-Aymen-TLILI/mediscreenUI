import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./patient";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly url = 'http://localhost:8081/api/patient/';
  private readonly urls = 'http://localhost:8081/api/patients';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.http.get(this.urls) as Observable<Patient[]>;
  }

  getOne(id: number): Observable<Patient> {
    return this.http.get(`${this.urls}/patient/${id}`) as Observable<Patient>;
  }

    save(patient: ɵTypedOrUntyped<{ firstName: FormControl<string | null>; lastName: FormControl<string | null>; address: FormControl<string | null>; gender: FormControl<string | null>; phone: FormControl<string | null>; birthDate: FormControl<null> }, ɵFormGroupValue<{ firstName: FormControl<string | null>; lastName: FormControl<string | null>; address: FormControl<string | null>; gender: FormControl<string | null>; phone: FormControl<string | null>; birthDate: FormControl<null> }>, any>): Observable<any> {
    return this.http.post(`${this.url}/add/`, patient) as Observable<any>;
  }

  update(patient: Patient): Observable<any> {
    return this.http.put(`${this.url}/${patient.id}`, patient) as Observable<any>;
  }
}

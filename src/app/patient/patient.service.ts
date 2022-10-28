import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly url = 'http://localhost:8081/api/patient';
  private readonly urls = 'http://localhost:8081/api/patients';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Patient[]> {
    return this.http.get(this.urls) as Observable<Patient[]>;
  }

  getOne(id: number): Observable<Patient> {
    return this.http.get(`${this.urls}/patient/${id}`) as Observable<Patient>;
  }

    save(patient: any): Observable<any> {
    return this.http.post(`${this.url}/add/`, patient) as Observable<any>;
  }

  update(patient: any): Observable<any> {
    return this.http.put(`${this.url}/${patient.id}`, patient) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urls}/patientId/${id}`) as Observable<any>;
  }
}

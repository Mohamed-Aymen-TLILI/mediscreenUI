import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly url = 'http://localhost:8082/patHistory/';
  private readonly urlToDelete = 'http://localhost:8082/notes/note/';

  constructor(private http: HttpClient,) {
  }

  getNoteListById(patientId: number): Observable<Note[]> {
    let params = new HttpParams();
    params = params.append('patientId', patientId.toString());
    return this.http.get(this.url, {params: params}) as Observable<Note[]>;
  }

  getOne(id: number): Observable<Note> {
    return this.http.get(`${this.url}${id}`) as Observable<Note>;
  }

  save(note: any): Observable<any> {
    const params = new HttpParams()
      .append('patientId', Number(note.patientId))
      .append('note', note.note.toString());
    return this.http.post(this.url + 'add', {}, {params: params}) as Observable<any>;
  }

  update(note: any): Observable<any> {
    const params = new HttpParams()
      .append('patientId', Number(note.patientId))
      .append('note', note.note.toString())
      .append('noteId', note.id);
    return this.http.put(this.url + 'update', {}, {params: params}) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlToDelete}${id}`) as Observable<any>;
  }
}

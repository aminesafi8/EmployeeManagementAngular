import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FicheBean} from "../../fiches-list/fiches-list.component";
import {CongeBean} from "../../conges-list/conges-list.component";

@Injectable({
  providedIn: 'root'
})
export class CongeDataService {

  constructor(private http: HttpClient) {
  }


  retrieveAllConges() {
    return this.http.get<CongeBean[]>('http://localhost:8080/api/conge/');

  }

  retrieveConge(id) {
    return this.http.get<CongeBean>(`http://localhost:8080/api/conge/search/${id}`);
  }

  deleteConge(id) {
    return this.http.delete(`http://localhost:8080/api/conge/${id}`);
  }


  updateConge(id, conge) {
    return this.http.put(`http://localhost:8080/api/conge/${id}`, conge);
  }

  createConge(conge) {
    return this.http.post('http://localhost:8080/api/conge/', conge);
  }
}

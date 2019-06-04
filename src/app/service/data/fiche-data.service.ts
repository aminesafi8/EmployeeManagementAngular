import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FicheBean} from 'src/app/fiches-list/fiches-list.component';
import {UserBean} from "../../list-employees/list-employees.component";

@Injectable({
  providedIn: 'root'
})
export class FicheDataService {

  constructor(private http: HttpClient) {
  }

  retrieveAllFiches() {
    return this.http.get<FicheBean[]>('http://localhost:8080/api/fiche/');

  }

  retrieveFiche(id) {
    return this.http.get<FicheBean>(`http://localhost:8080/api/fiche/search/${id}`);
  }

  deleteFiche(id) {
    return this.http.delete(`http://localhost:8080/api/fiche/${id}`);
  }


  updateFiche(id, fiche) {
    return this.http.put(`http://localhost:8080/api/fiche/${id}`, fiche);
  }

  createFiche(fiche) {
    return this.http.post('http://localhost:8080/api/fiche/', fiche);
  }




}

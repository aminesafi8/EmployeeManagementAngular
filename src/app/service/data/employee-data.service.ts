import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserBean} from 'src/app/list-employees/list-employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) {
  }

  retrieveAllEmployees() {
    return this.http.get<UserBean[]>('http://localhost:8080/api/user/');

  }

  deleteEmployee(cin) {
    return this.http.delete(`http://localhost:8080/api/user/${cin}`);
  }

  retrieveEmployee(cin) {
    return this.http.get<UserBean>(`http://localhost:8080/api/user/search/${cin}`);
  }

  updateEmployee(cin, employee) {
    return this.http.put(`http://localhost:8080/api/user/${cin}`, employee);
  }


  createEmployee(employee) {
    return this.http.post('http://localhost:8080/api/user/', employee);
  }


  employeeExist(cin) {
    return this.http.get<UserBean>(`http://localhost:8080/api/user/exist/${cin}`, {observe: 'response'});

  }


}

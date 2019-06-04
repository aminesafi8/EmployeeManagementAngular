import {Component, OnInit} from '@angular/core';
import {EmployeeDataService} from '../service/data/employee-data.service';
import {Router} from '@angular/router';

export class UserBean {
  constructor(
    public id: number,
    public cin: string,
    public nom: string,
    public prenom: string,
    public login: string,
    public password: string,
    public adresse: string,
    public telephone: string,
    public sexe: String,
    public dateNaissance: Date,
    public lieuNaissance: string,
    public situation: string,
    public nbEnfant: number,
    public dateRecrutement: Date,
    public echelon: string,
    public fonction: string,
    public role:string
  ) {
  }


}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})


export class ListEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeDataService,
              private router: Router) {
  }

  employees = [];
  message: string;
  saved: string;


  foundedEmployee: UserBean;
  employeeExist =false;


  public searchStr: string = "";

  public searchEmployee(str: string): void {
    this.searchStr = str;
    // Add code for searching here
    console.log(this.searchStr)


    this.employeeService.retrieveEmployee(this.searchStr).subscribe(data => {
        if (data != null) {
          console.log(data);
          this.employeeExist=true;
          this.foundedEmployee = data;
        }
        else{
          this.employeeExist=false;
        }
      }
    );


  }


  ngOnInit() {
    this.refreshEmployees();

  }

  refreshEmployees() {
    this.employeeService.retrieveAllEmployees().subscribe(response => {
      console.log(response)
      this.employees = response;
    });
  }


  deleteEmployee(employee) {
    this.employeeService.deleteEmployee(employee.cin).subscribe(response => {
      console.log(response);
      this.message = `Employee ${employee.nom} ${employee.prenom} was deleted`;
      this.refreshEmployees();
    });

  }

  addEmployee() {

    this.router.navigate(['employees', -1]);

  }

  updateEmployee(employee) {
    console.log(employee.cin);
    this.saved = "Employee was saved !"
    this.router.navigate(['employees', employee.cin]);


  }

}

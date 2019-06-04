import {Component, OnInit} from '@angular/core';
import {EmployeeDataService} from '../service/data/employee-data.service';
import {UserBean} from '../list-employees/list-employees.component';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeDataService, private route: ActivatedRoute, private router: Router) {
  }


  cin: string;
  user: UserBean;

  employeeExist = false;


  responseCodeEmployeeExist: number;
  employeeExistMessage = 'You can t add this employee, already exist';


  ngOnInit() {
    this.cin = this.route.snapshot.params['cin'];
    this.user = new UserBean(1, this.cin, '', '', '', '', '', '', '', new Date(), '', '', 0, new Date(), '', '', '');
    if (this.cin != '-1') {

      this.employeeService.retrieveEmployee(this.cin).subscribe(
        data => {
          this.user = data;
        }
      );
    }
  }


  public searchEmployee(str: string): void {
    this.user.cin = str;
    // Add code for searching here
    console.log(this.user.cin)


    this.employeeService.employeeExist(this.user.cin).subscribe(data => {
        if (data != null) {
          this.employeeExist = true;
          this.responseCodeEmployeeExist = data.status;
        }

      }, error => {
        this.employeeExist = false;
        this.responseCodeEmployeeExist = error.status;
      }
    );


  }


  saveEmployee() {


    //testing on the response code if an employee exist
    if (this.responseCodeEmployeeExist === 404) {

      if (this.cin === '-1') {
        //create Employee

        this.employeeService.createEmployee(this.user).subscribe(data => {
          console.log(data);
          this.router.navigate(['employees']);

        });

      } else {
        console.log(this.cin);
        console.log(this.user);
        this.employeeService.updateEmployee(this.cin, this.user).subscribe(data => {
          console.log(data);
          this.router.navigate(['employees']);

        });
      }
    }
  }

}

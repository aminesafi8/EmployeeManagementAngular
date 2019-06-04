import {Component, OnInit} from '@angular/core';
import {EmployeeDataService} from "../service/data/employee-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FicheDataService} from "../service/data/fiche-data.service";
import {FicheBean} from "../fiches-list/fiches-list.component";
import {UserBean} from "../list-employees/list-employees.component";

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  constructor(private employeeService: EmployeeDataService, private ficheService: FicheDataService, private route: ActivatedRoute, private router: Router) {
  }

  id: number;


  selectedEmloyee: string;

  employeeToPopulate: UserBean;

  employees: UserBean [];


  alreadyHasFiche = false;
  msgAlreadyHasFiche: string;


  fiche: FicheBean;


  ngOnInit() {


    this.employeeService.retrieveAllEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;

    })


    this.id = this.route.snapshot.params['id'];
    console.log("current fiche id ===> " + this.id);


    this.fiche = new FicheBean(0, 0, 0, 0, 0, 0, 0, 0, 0,
      new UserBean(1, '', '', '', '', '', '', '', '', new Date(), '', '', 0, new Date(), '', '',''));
    if (this.id != -1) {

      this.ficheService.retrieveFiche(this.id).subscribe(
        data => {
          this.fiche = data;
          console.log("this fiche ( import sur revenue ) => " + data.importSurRevenue)
        }
      );

    }

  }

  public getSelectedEmployee(event): void {
    const newVal = event.target.value;

    console.log("selected employee cin => " + newVal);


    this.employeeService.retrieveEmployee(newVal).subscribe(data => {


      //just for test
      console.log("retrieved employee [=> CIN ] = " + data.cin);
      this.employeeToPopulate = data;
    })


  }

  saveFiche() {


    if (this.id === -1) {
      //create Fiche


      this.fiche.user = this.employeeToPopulate; //to set the user in the fiche

      this.ficheService.createFiche(this.fiche).subscribe(data => {
        console.log(data);

        this.router.navigate(['fiches']);


      });


    } else {
      //update Fiche

      console.log("fiche to update id <=> " + this.id);

      this.fiche.user = this.employeeToPopulate; //to set the user in the fiche
      this.ficheService.updateFiche(this.id, this.fiche).subscribe(data => {

        this.router.navigate(['fiches']);


      });
    }


  }

}

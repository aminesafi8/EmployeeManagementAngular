import {Component, OnInit} from '@angular/core';
import {EmployeeDataService} from "../service/data/employee-data.service";
import {FicheDataService} from "../service/data/fiche-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CongeDataService} from "../service/data/conge-data.service";
import {UserBean} from "../list-employees/list-employees.component";
import {FicheBean} from "../fiches-list/fiches-list.component";
import {CongeBean} from "../conges-list/conges-list.component";

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  constructor(private congeService: CongeDataService, private employeeService: EmployeeDataService, private route: ActivatedRoute, private router: Router) {
  }

  id: number;
  selectedEmloyee: string;
  selectedType : string;
  employeeToPopulate: UserBean;
  employees: UserBean [];
  conge: CongeBean;


  ngOnInit() {
    this.employeeService.retrieveAllEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;

    })

    this.id = this.route.snapshot.params['id'];
    console.log("current conge id ===> " + this.id);

    this.conge = new CongeBean(1, new Date(), new Date(), '', new UserBean(1, '', '', '', '', '', '', '', '', new Date(), '', '', 0, new Date(), '', '', ''));
    if (this.id != -1) {

      this.congeService.retrieveConge(this.id).subscribe(
        data => {
          this.conge = data;
          console.log("this conge ( date debut ) => " + data.dateDebut)
          console.log("this conge ( date fin ) => " + data.dateFin)
        }
      );

    }

  }


  public getSelectedType(event): void {
    const newVal = event.target.value;
    console.log("selected reason  => " + newVal);
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


  saveConge() {


    if (this.id === -1) {
      //create Conge


      this.conge.user = this.employeeToPopulate; //to set the user in the fiche

      this.congeService.createConge(this.conge).subscribe(data => {
        console.log("dataa =>" + data);

        this.router.navigate(['conges']);


      });


    } else {
      //update Fiche

      console.log("conge to update id <=> " + this.id);

      this.conge.user = this.employeeToPopulate; //to set the user in the fiche
      this.congeService.updateConge(this.id, this.conge).subscribe(data => {

        this.router.navigate(['conges']);


      });
    }


  }


}

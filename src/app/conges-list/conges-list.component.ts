import {Component, OnInit} from '@angular/core';
import {FicheDataService} from "../service/data/fiche-data.service";
import {Router} from "@angular/router";
import {CongeDataService} from "../service/data/conge-data.service";
import {UserBean} from "../list-employees/list-employees.component";


export class CongeBean {
  constructor(
    public id: number,
    public dateDebut: Date,
    public dateFin: Date,
    public type: string,
    public user: UserBean,
  ) {
  }


}

@Component({
  selector: 'app-conges-list',
  templateUrl: './conges-list.component.html',
  styleUrls: ['./conges-list.component.css']
})
export class CongesListComponent implements OnInit {

  constructor(private congeService: CongeDataService, private router: Router) {
  }

  conges = [];
  message: string;
  saved: string;

  ngOnInit() {
    this.refreshConges();

  }

  addConge() {

    this.router.navigate(['conges', -1]);

  }

  refreshConges() {
    this.congeService.retrieveAllConges().subscribe(response => {
      console.log(response)
      this.conges = response;
    });
  }

  deleteConge(conge) {
    this.congeService.deleteConge(conge.id).subscribe(response => {
      console.log(response);
      this.message = `Conge ${conge.id} was deleted`;
      this.refreshConges();
    });

  }


  updateConge(conge) {
    console.log("conge id ==> " + conge.id);
    this.saved = "Conge was saved !"
    this.router.navigate(['conges', conge.id]);


  }

}

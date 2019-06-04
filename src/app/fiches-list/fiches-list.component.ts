import { Component, OnInit } from '@angular/core';
import { FicheDataService } from '../service/data/fiche-data.service';
import {Router} from "@angular/router";
import {UserBean} from "../list-employees/list-employees.component";
export class FicheBean {
  constructor(public salaireBase: number,
    public salaireBrut: number,
    public salaireImposable: number,
    public importSurRevenue: number,
    public salaireNet: number,
    public primePresence: number,
    public primeFonction: number,
    public primeProduction: number,
    public primeVoiture: number,
    public user:UserBean) { }



}
@Component({
  selector: 'app-fiches-list',
  templateUrl: './fiches-list.component.html',
  styleUrls: ['./fiches-list.component.css']
})
export class FichesListComponent implements OnInit {



  constructor(private ficheService: FicheDataService,private router:Router) { }
  fiches = [];
  message: string;
  saved:string;



  ngOnInit() {
    this.refreshFiches();

  }


  addFiche(){

    this.router.navigate(['fiches',-1]);

  }


  refreshFiches() {
    this.ficheService.retrieveAllFiches().subscribe(response => {
      console.log(response)
      this.fiches = response;
    });
  }

  deleteFiche(fiche) {
    this.ficheService.deleteFiche(fiche.id).subscribe(response => {
      console.log(response);
      this.message = `Fiche ${fiche.id} was deleted`;
      this.refreshFiches();
    });

  }


  updateFiche(fiche){
    console.log("fiche id ==> "+fiche.id);
    this.saved="Fiche was saved !"
    this.router.navigate(['fiches',fiche.id]);


  }



}

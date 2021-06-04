import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhpData} from '../php-data';
import {Observable, Subject} from 'rxjs';
import { print } from 'util';

interface Cours {
  id_cours: number,
  nom: string,
  nb_sujet: number,
  nb_post: number,
  date_maj: object
  }

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit, OnDestroy {

  cours : Cours[];

  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let recup =this.recupCours();
    recup.subscribe(value => {
      this.cours=value.data;
      console.log(this.cours);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }

  recupCours() : Observable<PhpData> {
   
    return this.http.post<PhpData>(
      //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
      'http://forum/angular/getCours.php', 
      null,
      {withCredentials:true}
    
    );
  }

}

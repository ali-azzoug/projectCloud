import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhpData} from '../php-data';
import {Observable, Subject, Subscriber} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbData } from '../breadcrumb/breadcrumb.component';
import * as bootstrap from 'bootstrap';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { DataTableDirective } from 'angular-datatables';

interface Topic {
  id_sujet: number,
  nom: string,
  nb_post: number,
  dernier_maj: object,
  0 : string
  }

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit, OnDestroy {


  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  topics : Topic[];
  Ntopic : Topic;
  newTopic : string;
  dtTrigger: Subject<any> = new Subject();
  breadcrumb : BreadcrumbData[];


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let recup =this.recupTopics();
    recup.subscribe(value => {
      this.topics=value.data;
      //console.log(this.topics);
      this.dtTrigger.next();

      this.breadcrumb= [
        { nom: 'Tous les cours', route: '/cours' },
        { nom: this.topics[0][0], route: '' }
       ] ;
        
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }


  recupTopics() : Observable<PhpData> {
    const formData = new FormData();
    let id=this.route.snapshot.paramMap.get('id');
    formData.append("id",id);
  return this.http.post<PhpData>(
    //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
    'http://forum/angular/getTopics.php', 
    formData,
    {withCredentials:true}
  
  );
}

sendNewTopic() : void {
  //console.log(this.newTopic);
  const formData = new FormData();
  let id=this.route.snapshot.paramMap.get('id');
  formData.append("fk_cours",id);
  formData.append("new_topic",this.newTopic);
let recup= this.http.post<PhpData>(
  //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
  'http://forum/angular/nouveauSujetBdd.php', 
  formData,
  {withCredentials:true}
);

recup.subscribe({
  next : value => {this.topics.push({id_sujet:value.data[0][0],nom: this.newTopic,nb_post:0,dernier_maj:value.data[0][3],0:value.data[0][4]});},
  complete :() => {$('#modal_sujet').modal('hide'),
  console.log(this.topics),
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // on commence par détruire la table
    dtInstance.destroy();
    // on réappelle le dtTrigger afin de réafficher la table
    this.dtTrigger.next();
    });}
  
});
}


}

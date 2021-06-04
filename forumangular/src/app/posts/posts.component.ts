import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhpData} from '../php-data';
import {Observable, Subject, Subscriber} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbData } from '../breadcrumb/breadcrumb.component';
import * as bootstrap from 'bootstrap';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { DataTableDirective } from 'angular-datatables';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface Post {
  id_cours: number,
  nom_cours: string,
  nom_topic: string,
  id_post: number,
  description: string,
  fk_utilisateur: string,
  date: object
  }

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  posts : Post[];
  NPost : Post;
  newpost : string;
  dtTrigger: Subject<any> = new Subject();
  breadcrumb : BreadcrumbData[];
  public Editor = ClassicEditor;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let recup =this.recupPosts();
    recup.subscribe(value => {
      this.posts=value.data;
      console.log(this.posts);
      this.dtTrigger.next();

      this.breadcrumb= [
        { nom: 'Tous les cours', route: '/cours' },
        { nom: this.posts[0]['nom_cours'], route: '/topics/'+this.posts[0]['id_post'] },
        { nom: this.posts[0]['nom_topic'], route: ''}
       ] ;
        
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    }

    recupPosts() : Observable<PhpData> {
      const formData = new FormData();
      let id=this.route.snapshot.paramMap.get('id');
      formData.append("id",id);
    return this.http.post<PhpData>(
      //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
      'http://forum/angular/getPosts.php', 
      formData,
      {withCredentials:true}
    
    );
  }

  sendNewPost() : void {
    //console.log(this.newTopic);
    const formData = new FormData();
    let id=this.route.snapshot.paramMap.get('id');
    formData.append("fk_topic",id);
    formData.append("description",this.newpost);
  let recup= this.http.post<PhpData>(
    //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
    'http://forum/angular/nouveauPostBdd.php', 
    formData,
    {withCredentials:true}
  );
  
  recup.subscribe({
    next : value => {this.posts.push({id_cours:0,nom_cours:'',nom_topic:'',id_post:value.data[0][0],description: this.newpost,date:value.data[0][3],fk_utilisateur:'theo'});},
    complete :() => {$('#modal_post').modal('hide'),
    console.log(this.posts),
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // on commence par détruire la table
      dtInstance.destroy();
      // on réappelle le dtTrigger afin de réafficher la table
      this.dtTrigger.next();
      });}
    
  });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { TopicsComponent } from '../topics/topics.component';

export interface BreadcrumbData {
  nom: string,
  route: string
  }
  

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() paths :BreadcrumbData[];

  constructor() { }

  ngOnInit() {
  }

}

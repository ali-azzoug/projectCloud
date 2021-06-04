import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  errorMessage : string;
 

  constructor(private service : AuthService,private router : Router) { 
    this.username="";
    this.password="";
    this.errorMessage="";
  }

  //constructor() { }

  ngOnInit() : void {
  }


  authenticate() : void {
    if(this.username.trim()=="" || this.password.trim()=="") {
      this.errorMessage="erreur : un des deux champs est vide";
    }
    else {
      let reponse=this.service.sendAuthentification(this.username,this.password);
      reponse.subscribe({
        
        next : value => this.service.finalizeAuthentication(value),
        complete: () => this.finalizeCheck()
      });
        
      } 

    }
  
    finalizeCheck() : void {
      if(this.service.isLoggedIn) {
        this.errorMessage="";
        if(this.service.redirectUrl=="") {
          this.router.navigateByUrl("/cours");
        }
        else {
          this.router.navigateByUrl(this.service.redirectUrl);
        }
      }
      else {
        this.errorMessage="Login ou Mdp incorrects"
      }
    }

}

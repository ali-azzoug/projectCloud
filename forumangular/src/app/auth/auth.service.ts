import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PhpData} from '../php-data';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=false;
  redirectUrl : string ="";

  constructor(private http: HttpClient) {}

  sendAuthentification(username : string,pwd : string) : Observable<PhpData> {
    const formData = new FormData();
    formData.append("username",username);
    formData.append("password",pwd);
    return this.http.post<PhpData>(
      //'http://127.0.0.1:8080/forum/angular/checkLogin.php',
      'http://forum/angular/checkLogin.php', 
      formData,
      {withCredentials:true}
    
    );
  }

  finalizeAuthentication(reponse : PhpData) {
    if(reponse.status=="ok") {
      this.isLoggedIn=true;
    }
    else {
      this.isLoggedIn=false;
    }
  }


}

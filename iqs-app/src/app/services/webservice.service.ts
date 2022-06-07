import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebserviceService {

  url = 'https://evtest.co.za/quotationsystem/backendManagment'

  constructor(private http: HttpClient) { }

  getLogin(username:any, password:any) {
    return new Observable((observer) => {
      this.http.get(`${this.url}/get/authlogin.php?username=` + username + `&password=` + password + ``)
        .subscribe((data: any) => {
          observer.next(data.result);
        });
    });
  }

}

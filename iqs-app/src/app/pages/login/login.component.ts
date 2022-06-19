import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  username = '';
  password = '';
  constructor(private webserviceService: WebserviceService,
     private router: Router,
     private spinner: NgxSpinnerService)
      { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData')!);
    if (!this.userData) {
      this.router.navigate(['']);
      return;
    } else {
      this.router.navigate(['dashboard']);
    }
  }


  btnLogin() {
    this.spinner.show();
    this.webserviceService.getLogin(this.username, this.password)
      .subscribe((recordsets: any) => {
        if (recordsets.id) {
          this.spinner.hide();
          localStorage.setItem('userData', JSON.stringify(recordsets));
           this.router.navigate(['dashboard']);
        } else {
          this.spinner.hide();
          alert(recordsets);
        }
      }, error => {

      });
  }
}

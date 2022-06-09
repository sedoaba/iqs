import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.scss']
})
export class DashboardhomeComponent implements OnInit {
  userData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData')!);
    if (!this.userData) {
      this.router.navigate(['']);
      return;
    } else {
      this.router.navigate(['dashboard']);
    }
  }

}

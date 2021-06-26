import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersUrl = 'assets/sampleUsers.json'
  users: any;
  userName = '';
  password = '';
  loginUser;
  constructor(private router: Router, private service: FilterService, private httpClient: HttpClient) {
    this.getUsers();
  }

  ngOnInit(): void {
  }
  navigate() {
    let filterdData = this.service.filterData(this.users, this.userName);
    if (filterdData.length !== 0 && filterdData[0].password === this.password) {
      this.loginUser = true;
      sessionStorage.setItem('login', 'true');
      this.router.navigateByUrl('/search');
    } else {
      this.loginUser = false;
    }
  }
  private getUsers() {
    this.httpClient.get<any>(this.usersUrl).subscribe(data => {
      this.users = data;
    });
  }
}

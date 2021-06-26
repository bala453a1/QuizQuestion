import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question:any;
  constructor(private router: Router,private service: FilterService) { 
    let userLoggedIn = sessionStorage.getItem('login');
    if (userLoggedIn !== 'true') {
      this.router.navigateByUrl('/login');
    } else {
    sessionStorage.getItem('login');
    }
  }
  ngOnInit(): void {
      this.question =JSON.parse(localStorage.getItem('item'));
    }
    logout(){
      this.service.clearSession();
    }
}

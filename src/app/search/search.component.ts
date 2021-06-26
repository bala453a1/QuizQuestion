import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  questionsUrl = 'assets/questions.json'
  questions: any;
  searchText = '';
  searchResults = [];
  noResults = false;
  constructor(private router: Router, private service: FilterService, private httpClient: HttpClient) {
    let userLoggedIn = sessionStorage.getItem('login');
    if (userLoggedIn !== 'true') {
      this.router.navigateByUrl('/login');
    } else {
      this.fnQuestions();
    }
  }

  ngOnInit(): void {
  }
  private fnQuestions() {
    this.httpClient.get<any>(this.questionsUrl).subscribe(data => {
      this.questions = data;
    });
  }
  filterQuestions() {
    this.searchResults = this.service.filterQuestionData(this.questions, this.searchText);
    if(this.searchResults.length === 0){
      this.noResults = true;
    }else{
      this.noResults = false;
    }
  }
  selectQuestion = (question: any) => {
    let results = [];
    let id = question.currentTarget.innerText.slice(4, 6);
    results = this.questions.filter(data => data.id === id);
    localStorage.removeItem('item');
    localStorage.setItem('item', JSON.stringify(results[0]));
    this.router.navigateByUrl('/question');
  }
  logout(){
    this.service.clearSession();
  }

}

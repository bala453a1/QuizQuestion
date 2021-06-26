import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private router: Router) { }
  public filterData(data, args) {
    let results = [];
    for (let i = 0; i < data.length; i++) {
      for (let key in data[i]) {
        if (data[i][key] !== null && data[i][key] !== undefined && data[i][key] !== "") {
          if (data[i][key].indexOf(args) != -1) {
            results.push(data[i]);
            break;
          }
        }
      }
    }
    return results;
  }
  public filterQuestionData(data, args) {
    let results = [];
    for (let i = 0; i < data.length; i++) {
      for (let key in data[i]) {
        if (key === 'questionText') {
          if (data[i][key] !== null && data[i][key] !== undefined && data[i][key] !== "") {
            if (data[i][key].toLowerCase().indexOf(args) != -1) {
              results.push(data[i]);
              break;
            }
          }
        }
      }
    }
    return results;
  }
  public clearSession(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}

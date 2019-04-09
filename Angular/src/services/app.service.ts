import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor( private http: HttpClient) {
  }
  private apiUrl = 'http://agl-developer-test.azurewebsites.net/people.json';

  fetchData(res: any) {
    return res;
  }
  
  fetchApiJson(){
    return this.http.get(this.apiUrl).pipe(map(this.fetchData));
  }
}

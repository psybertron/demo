import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  apiJson = {};
  constructor(private service: AppService) {
    this.service.fetchApiJson().subscribe( res => {
      this.getData(res);
      this.sortNames(this.apiJson);
    });
  }

  getData(data) {
    const res = data.reduce((result, value) => {
      result[value.gender.toLowerCase()] = result[value.gender.toLowerCase()]
      .concat((value.pets || [])
      .filter(pet => pet.type === 'Cat')
      .map(pet => pet.name));
      return result;
    },{
      male: [],
      female: []
    });
    this.apiJson = res;
  }

  sortNames(data) {
    data.male.sort();
    data.female.sort();
  }
}

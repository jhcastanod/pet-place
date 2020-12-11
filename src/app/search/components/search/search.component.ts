import { Component } from '@angular/core';

import { RESULTS } from 'src/assets/backend.mock';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTxt: string;
  results = RESULTS;

  modelChange(text: string) {
    this.results = RESULTS.filter(result => result.name.includes(text));
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFor: string;

  @Output () searchResult = new EventEmitter<any>()

  search() {
    this.searchResult.emit(this.searchFor);
    this.searchFor = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

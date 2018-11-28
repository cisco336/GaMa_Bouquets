import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  favorite: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  favChange() {
    this.favorite = !this.favorite;
  }
}

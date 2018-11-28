import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public content = [];
  public favorite = false;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
    .subscribe((data) => {
      data.forEach((d) => this.content.push(d));
    });
  }

}

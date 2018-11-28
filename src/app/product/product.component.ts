import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  content = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe((data) => {
        data.forEach((d) => {
          if (d.id === +this.getProduct()) {
            this.content.push(d);
          }
        });
      });
  }
  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    return id;
  }
  goBack(): void {
    this.location.back();
  }

}

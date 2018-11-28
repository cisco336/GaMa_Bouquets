import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CarouselComponent implements OnInit {
  public content = [];
  constructor(private _dataService: DataService) { }
  ngOnInit() {
    this._dataService.getData().subscribe((data) => {
      data.forEach((d) => {
        if (d.slider === true) {
          this.content.push(d);
        }
      });
    });
  }

}

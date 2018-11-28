import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  public content = [];
  constructor(config: NgbCarouselConfig, private _dataService: DataService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
   }
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

import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data-service.service';
import { timeout } from 'q';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Native
})
export class CarouselComponent implements OnInit, AfterViewInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  public content = [];
  constructor(private elementRef: ElementRef, config: NgbCarouselConfig, private _dataService: DataService) {
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

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.carousel-control-next-icon');
    setTimeout(
      // d1.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
      console.log(this.elementRef)
    , 10
    );
  }

}

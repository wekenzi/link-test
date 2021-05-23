import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit, AfterViewInit {

  slidesStore = [
    {id:1, img:'banner1.jpg'},
    {id:2, img:'banner2.jpg'},
    {id:3, img:'banner1.jpg'},
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
    nav: true,
    items: 1
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const nav = document.getElementsByClassName('owl-nav')[0];
    const dots = document.getElementsByClassName('owl-dots')[0];
    nav.classList.add('navs-edits', 'container-fluid', 'px-md-5');
    dots.classList.add('dots-edits', 'container-fluid', 'px-md-5');
  }

}

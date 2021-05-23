import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-realted-bolg',
  templateUrl: './realted-bolg.component.html',
  styleUrls: ['./realted-bolg.component.scss']
})
export class RealtedBolgComponent implements OnInit {
  @Input() blog:{id:number, text:string, img:string};
  constructor() { }

  ngOnInit(): void {
  }

}

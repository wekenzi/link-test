import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {id:1, icon:'service1.png', text:'Find Place'},
    {id:2, icon:'service2.png', text:'A`awen'},
    {id:3, icon:'service3.png', text:'Omniyat'},
    {id:4, icon:'service4.png', text:'Give Time'},
    {id:5, icon:'service5.png', text:'Tofoula'},
    {id:6, icon:'service6.png', text:'Fundraising'},
    {id:7, icon:'service7.png', text:'Zakat'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

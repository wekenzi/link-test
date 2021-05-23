import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() showSideNav:boolean;
  socialLinks:any[] = [
    { link:'http://www.twitter.com', icon:'icofont-twitter' },
    { link:'http://www.facebook.com', icon:'icofont-facebook' },
    { link:'http://www.linkedin.com', icon:'icofont-linkedin' },
    { link:'http://www.youtube.com', icon:'icofont-youtube' },
    { link:'http://www.instagram.com', icon:'icofont-instagram' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

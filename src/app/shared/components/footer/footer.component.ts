import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialLinks:any[] = [
    { link:'http://www.instagram.com', icon:'icofont-instagram' },
    { link:'http://www.youtube.com', icon:'icofont-youtube' },
    { link:'http://www.linkedin.com', icon:'icofont-linkedin' },
    { link:'http://www.facebook.com', icon:'icofont-facebook' },
    { link:'http://www.twitter.com', icon:'icofont-twitter' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

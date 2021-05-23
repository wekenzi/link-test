import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sub = new Subscription();
  showSideNav = false;
  @Output() changeSideNavStatus = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) this.changeSideNavStatus.emit(false);
      this.showSideNav = false;
    });
  }

  toggleSideNav() {
    this.changeSideNavStatus.emit(!this.showSideNav);
    this.showSideNav = !this.showSideNav;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

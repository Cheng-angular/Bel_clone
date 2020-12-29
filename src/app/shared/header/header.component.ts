import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: boolean;
  headerChange: boolean;
  constructor() { }

  ngOnInit(): void {
    this.headerChange = false;
    this.scrollEffect();
  }

  toggleCanvas() {
    this.open = !this.open;
  }

  scrollEffect(): void {
    let topPos = 0;
    window.addEventListener('scroll', () => {
      topPos = (document.body.getBoundingClientRect()).top;
      if (topPos ==0 ||(topPos <= 0 && topPos >= -100)) {
        this.headerChange = false;
      } else {
        this.headerChange = true;
      }
    })
  }
}

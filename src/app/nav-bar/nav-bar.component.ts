import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    $('aside').toggleClass('openMenuAside');
    $('main').toggleClass('openMenuMain');
    $('nav').toggleClass('openMenuNav');
    $('ul').toggleClass('openMenuUl');
    $('ul li').toggleClass('openMenuUlli');
    $('figure').toggleClass('openMenuFigure');
  }
}

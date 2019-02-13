import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/jared-hawley-a6094112a/');
  }
}

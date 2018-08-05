import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  image = './assets/images/machine-learning.png';

  constructor() { }

  ngOnInit() {
  }

}

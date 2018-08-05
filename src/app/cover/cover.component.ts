import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  image = 'https://picsum.photos/1024/500?image=903';

  constructor() { }

  ngOnInit() {
  }

}

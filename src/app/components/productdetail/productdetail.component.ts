import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  static INCREMENT = 'INCREMENT';

  constructor() {}

  ngOnInit(): void {}
}

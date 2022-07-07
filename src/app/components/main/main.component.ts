import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products: any[] = [];
  carroussel: any[] = [];

  constructor(private producService: ProductService) {}

  ngOnInit(): void {
    this.producService.getProducts().subscribe(
      async (data: any) => {
        this.products = await data['games'].slice(3, 12);
        this.carroussel = await data['games'].slice(0, 3);
        console.log(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

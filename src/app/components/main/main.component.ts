import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products: any[] = [];
  carroussel: any[] = [];
  chooseImage: number = 2;
  teste: any = [];

  constructor(private producService: ProductService) {}

  increase() {
    this.chooseImage += 1;
    this.teste = this.carroussel[this.chooseImage % 3];
    console.log(this.chooseImage);
  }

  decrease() {
    if (this.chooseImage === 0) {
      this.chooseImage += 2;
    } else {
      this.chooseImage -= 1;
    }
    this.teste = this.carroussel[this.chooseImage % 3];
    console.log(this.chooseImage);
  }

  async ngOnInit(): Promise<void> {
    (await this.producService.getProducts()).subscribe(
      async (data: any) => {
        this.products = await data['games'].slice(3, 11);
        this.carroussel = await data['games'].slice(0, 3);
        this.teste = this.carroussel[this.chooseImage % 3];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

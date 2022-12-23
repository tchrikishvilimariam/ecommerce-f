import { Component, OnInit } from '@angular/core';
import { Product} from "../../../../core/interfaces";
import {ProductsService} from "../../../../core/services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    this.productsService.getProducts({})
      .pipe()
      .subscribe(res => {
        this.products = res;
      })
  }

  deleteItem(id: string) {
    this.productsService.deleteItem(id)
      .pipe()
      .subscribe(() => {
        this.getAll()
      })
  }

}

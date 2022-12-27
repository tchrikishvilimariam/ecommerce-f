import { Component, OnInit } from '@angular/core';
import {CartService, OrderService} from "../../core/services";
import {Cart} from "../../core/interfaces/cart";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = []
  cartSum = 0

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCarts()
  }


  getCarts() {
    this.cartService.getCarts()
      .pipe()
      .subscribe(res => {
        this.cartItems = res
        this.cartSum = this.cartItems.reduce((acc, item) => acc + item.total, 0)
      })
  }

  removeItem(item: Cart) {
    this.cartService.deleteItem(item.id)
      .pipe()
      .subscribe(() => {
        this.getCarts()
      })
  }

  checkout() {
    this.orderService.createOrder().subscribe( () => {
      this.router.navigate(['/orders'])
    })
  }
}

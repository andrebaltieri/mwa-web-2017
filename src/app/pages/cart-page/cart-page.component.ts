import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  providers: [DataService]
})
export class CartPageComponent implements OnInit {
  public items: any[] = [];
  public discount: number = 0;
  public deliveryFee: number = 5;

  constructor(private cartService: CartService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.items;
  }

  remove(item: any) {
    this.cartService.removeItem(item.id);
  }

  getSubTotal(): number {
    return this.cartService.getSubTotal();
  }

  checkQuantity(item) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  }

  checkout() {
    var user = JSON.parse(localStorage.getItem('mws.user'));
    var data = {
      customer: user.id,
      deliveryFee: this.deliveryFee,
      discount: this.discount,
      items: []
    };

    for (let i of this.cartService.items) {
      data.items.push({
        product: i.id,
        quantity: i.quantity
      })
    }

    this.dataService.createOrder(data)
      .subscribe(result => {
        alert('Pedido criado com sucesso!');
        this.cartService.clear();
        this.router.navigateByUrl('/home');
      }, err => {
        console.log(err);
      });
  }

}

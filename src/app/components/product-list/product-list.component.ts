import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [DataService]
})
export class ProductListComponent implements OnInit {
  public products: any[];
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
    })
  }

  addToCart(product) {
    this.cartService.addItem({ id: product.id, title: product.title, segment: product.segment, price: product.price, quantity: 1 });
  }
}

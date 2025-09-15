import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartItem } from "./cart-details/cart-details.component";
import { CartDetailsComponent } from './cart-details/cart-details.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CustomerDetailsComponent, ProductDetailsComponent,CartDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <app-product-details (addToCart)="handleAddToCart($event)"></app-product-details>
    <app-cart [cartItems]="cart"></app-cart>
  `,
})
export class AppComponent {
  title = 'Billracker';
  cart: CartItem[] = [];

  handleAddToCart(item: CartItem) {
    this.cart.push(item);
    this.cart = [...this.cart]; // refresh table data
  }
}

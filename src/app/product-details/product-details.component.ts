import { Component, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
// Update this import if CartItem is not defined in cart-details.component
import { CartItem } from '../cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [MatInputModule, MatCardModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productName: string = '';
  price: number | null = null;
  quantity: number | null = null;

  @Output() addToCart = new EventEmitter<CartItem>();

  onAdd() {
    if (this.price !== null && this.quantity !== null) {
      const item: CartItem = {
        productName: this.productName,
        price: this.price,
        quantity: this.quantity,
        total: this.price * this.quantity
      };
      this.addToCart.emit(item);

      // Reset fields
      this.productName = '';
      this.price = null;
      this.quantity = null;
    }
  }
}
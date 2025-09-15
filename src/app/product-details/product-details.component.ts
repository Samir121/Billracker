import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
import { CartItem } from './cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';


@Component({
  declarations: [ProductDetailsComponent],
  selector: 'app-product-details',
  imports: [MatInputModule,MatCardModule,FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productName: string = '';
  price: number | null = null;
  quantity: number | null = null;

  @Output() addToCart = new EventEmitter<CartItem>();

  onAdd(){
    const item: CartItem = {
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
      total: this.price * this.quantity
    }
    this.addToCart.emit(item);

    // Reset fields
      this.productName = '';
      this.price = null;
      this.quantity = null;
  }
}

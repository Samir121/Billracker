import { Component, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
// Update this import if CartItem is not defined in cart-details.component
import { CartItem } from '../cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  imports: [MatInputModule, MatCardModule, FormsModule, MatDialogModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
   constructor(private dialogRef: MatDialogRef<ProductDetailsComponent>) {}


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
      // Optionally emit item here
      this.dialogRef.close(item); // Close dialog and return item
      // Reset fields if needed
      this.productName = '';
      this.price = null;
      this.quantity = null;
    }
  }
   onClose() {
    this.dialogRef.close();
  }
   
}
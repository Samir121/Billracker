import { Component, Input} from '@angular/core';
import { MatCardTitle, MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export interface CartItem{
  productName : string;
  price: number;
  quantity: number;
  total: number;
} 


@Component({
  selector: 'app-cart-details',
  imports: [MatCardTitle, MatCardModule, MatTableModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent {

  constructor(private dialog: MatDialog) {}
  cartItems: CartItem[] = [
    { productName: 'Apple', price: 30, quantity: 2, total: 60 },
    { productName: 'Banana', price: 10, quantity: 5, total: 50 },
    { productName: 'Orange', price: 20, quantity: 3, total: 60 }
  ];

  displayedColumns: string[] = ['productName', 'price', 'quantity', 'total'];

    // ...existing code...
  onAddItem() {
    this.dialog.open(ProductDetailsComponent, {
      width: '1200px', // or any desired width, e.g. '50vw'
      height: '38vh'
    }).afterClosed().subscribe((item: CartItem | undefined) => {
    if (item) {
      this.cartItems.push(item);
      this.cartItems = [...this.cartItems]; // refresh table data
    }
    });
  }
  // ...existing code...
  getTotalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }
// ...existing code...
  // ...existing code...
}
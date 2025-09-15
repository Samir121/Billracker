import { Component, Input} from '@angular/core';
import { MatCardTitle, MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';

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
  cartItems: CartItem[] = [
    { productName: 'Apple', price: 30, quantity: 2, total: 60 },
    { productName: 'Banana', price: 10, quantity: 5, total: 50 },
    { productName: 'Orange', price: 20, quantity: 3, total: 60 }
  ];

  displayedColumns: string[] = ['productName', 'price', 'quantity', 'total'];
}
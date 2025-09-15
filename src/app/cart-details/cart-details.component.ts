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
  @Input() cartItems: CartItem[] = [];

  displayedColumns: string[] = ['productName', 'price', 'quantity', 'total'];
}

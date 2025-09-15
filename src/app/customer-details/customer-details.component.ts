import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-customer-details',
  imports: [MatInputModule, MatSelectModule, MatCardModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
    customerType: string = 'retail';
}

import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    // ...
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule
  ],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

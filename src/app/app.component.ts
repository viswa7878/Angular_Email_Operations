import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';  // Import the NavbarComponent
import { HomeComponent } from './components/home/home.component';  // Import the NavbarComponent
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from './service/email.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HomeComponent,
    MatButtonModule,MatSnackBarModule
    ,MatToolbarModule,HttpClientModule,FormsModule,MatIconModule,MatInputModule,MatFormFieldModule,CommonModule],  // Add NavbarComponent here
  providers:[MatSnackBar,EmailService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emailgui';
}

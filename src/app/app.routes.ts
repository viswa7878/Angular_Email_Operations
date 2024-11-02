import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';  // Import the NavbarComponent
import { EmailComponent } from './components/email/email.component';  // Import the NavbarComponent

export const routes: Routes = [
{
    path:'sendemail',
    component:EmailComponent,
    pathMatch:"full"

},

{
    path:'',
    component:HomeComponent,
    pathMatch:"full"
}

]; 
  
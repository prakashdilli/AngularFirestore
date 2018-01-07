import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';

import { AuthguardService } from './services/authguard.service';

const appRoutes : Routes = [
    {path: '', component: LoginComponent},  
    {path:'home', component:HomeComponent, canActivate:[AuthguardService]} 
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { ProductComponent } from './component/product/product.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'catalog', pathMatch: 'full'},
    {path: 'login', component: AuthComponent},
    {path: 'catalog', component: ProductComponent, canActivate: [authGuard]}
];

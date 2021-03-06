import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './core/containers/home-layout/home-layout.component';
import { HomeComponent } from './core/containers/home/home.component';
import {AddressBookComponent} from './core/components/address-book/address-book.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'address-book',
        component: AddressBookComponent,
        data: { title: 'ADDRESS BOOK' }
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

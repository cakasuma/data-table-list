import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { DataDetailsComponent } from './data-details/data-details.component';

const routes: Routes = [
  {
    path: '',
    component: DataListComponent
  },
  {
    path: 'details/:id',
    component: DataDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

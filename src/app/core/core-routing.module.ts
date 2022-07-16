import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './containers/main-page/main-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'image'
  },
  {
    path:':view',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

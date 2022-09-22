import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuonsachComponent } from './muonsach.component';

const routes: Routes = [{ path: '', component: MuonsachComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuonsachRoutingModule { }

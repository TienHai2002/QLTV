import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NhaxuatbanComponent } from './nhaxuatban.component';

const routes: Routes = [{ path: '', component: NhaxuatbanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhaxuatbanRoutingModule { }

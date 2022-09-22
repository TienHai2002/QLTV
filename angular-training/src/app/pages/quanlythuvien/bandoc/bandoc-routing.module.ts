import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandocComponent } from './bandoc.component';

const routes: Routes = [{ path: '', component: BandocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandocRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from 'src/app/shared/shared.module';
import { SachService } from '../../../shared/services/sach.service';
import { SachRoutingModule } from './sach-routing.module';
import { SachComponent } from './sach.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    SachComponent
  ],
    imports: [
        CommonModule,
        SachRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
        MatSelectModule,
    ],
providers: [SachService],
})
export class SachModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BandocService } from 'src/app/shared/services/bandoc.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BandocRoutingModule } from './bandoc-routing.module';
import { BandocComponent } from './bandoc.component';

@NgModule({
    declarations: [BandocComponent],
    imports: [
        CommonModule,
        BandocRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
    ],
    providers: [BandocService],
})
export class BandocModule {}

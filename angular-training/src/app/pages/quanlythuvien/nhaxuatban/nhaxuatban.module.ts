import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NhaxuatbanRoutingModule } from './nhaxuatban-routing.module';
import { NhaxuatbanComponent } from './nhaxuatban.component';
import { BandocService } from 'src/app/shared/services/bandoc.service';

@NgModule({
    declarations: [NhaxuatbanComponent],
    imports: [
        CommonModule,
        NhaxuatbanRoutingModule,
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
export class NhaxuatbanModule {}

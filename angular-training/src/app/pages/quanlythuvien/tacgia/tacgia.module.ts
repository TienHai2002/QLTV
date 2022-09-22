import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { TacGiaService } from 'src/app/shared/services/tacgia.service';
import { TacgiaRoutingModule } from './tacgia-routing.module';
import { TacgiaComponent } from './tacgia.component';

@NgModule({
    declarations: [TacgiaComponent],
    imports: [
        CommonModule,
        TacgiaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
    ],
    providers: [TacGiaService],
})
export class TacgiaModule {}

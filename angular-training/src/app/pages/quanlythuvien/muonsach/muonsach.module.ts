import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { MuonSachService } from 'src/app/shared/services/muonsach.service';
import { MuonsachRoutingModule } from './muonsach-routing.module';
import { MuonsachComponent } from './muonsach.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
    declarations: [MuonsachComponent],
    imports: [
        CommonModule,
        MuonsachRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
        MatSelectModule,
        MatDialogModule,
    ],
    providers: [MuonSachService],
})
export class MuonsachModule {}

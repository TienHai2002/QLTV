import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/shared/model/page';
import { BandocService } from 'src/app/shared/services/bandoc.service';

@Component({
    selector: 'app-bandoc',
    templateUrl: './bandoc.component.html',
    styleUrls: ['./bandoc.component.scss'],
})
export class BandocComponent implements OnInit {
    items = [];
    page = new Page();

    columns = [
        { name: 'STT', prop: 'index', flexGrow: 1.5 },
        { name: 'Name', prop: 'ten', flexGrow: 3 },
        { name: 'Ma', prop: 'ma', flexGrow: 3 },
        { name: 'Address', prop: 'diaChi', flexGrow: 3 },
        { name: 'Phone number', prop: 'sdt', flexGrow: 3 },
        { name: 'Created date', prop: 'ngaySinh', flexGrow: 3 },
        { name: 'Created user', prop: 'taoTk', flexGrow: 3 },
        { name: 'Rank', prop: 'hang', flexGrow: 3 },
        { name: 'Actions', prop: 'actions', flexGrow: 4 },
    ];

    formGroup = this.fb.group({
        id: [''],
        ten: ['', Validators.required],
        ma: ['', Validators.required],
        diaChi: ['', Validators.maxLength(100)],
        sdt: [''],
        ngaySinh: [''],
        taoTk: [''],
        hang: [''],
    });

    constructor(
        private fb: FormBuilder,
        private BandocService: BandocService,
        private toastrService: ToastrService
    ) {}

    ngOnInit(): void {
        this.prepareData();
    }

    prepareData() {
        this.getBandoc();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.BandocService.updateBandoc(
                this.formGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBandoc();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.BandocService.addBandoc(
                this.formGroup.getRawValue()
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBandoc();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getBandoc() {
        this.BandocService.getBandoc().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue(row);
    }

    delete(id: any) {
        this.BandocService.deleteBandoc(id).subscribe({
            next: () => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getBandoc();
            },
            error: (error) => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            },
        });
    }
    resetForm() {
        this.formGroup.reset();
    }

}

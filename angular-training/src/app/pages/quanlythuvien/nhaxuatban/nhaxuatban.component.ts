import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/shared/model/page';
import { NhaXuatBanService } from 'src/app/shared/services/nhaxuatban.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-nhaxuatban',
  templateUrl: './nhaxuatban.component.html',
  styleUrls: ['./nhaxuatban.component.scss']
})
export class NhaxuatbanComponent implements OnInit {

    items = [];
    page = new Page();

    columns = [
        { name: 'STT', prop: 'index', flexGrow: 1.5 },
        { name: 'Name', prop: 'ten', flexGrow: 3 },
        { name: 'Ma', prop: 'ma', flexGrow: 3 },
        { name: 'Address', prop: 'diaChi', flexGrow: 3 },
        { name: 'Trang Thai', prop: 'trangThai', flexGrow: 3 },
        { name: 'Mo Ta', prop: 'moTa', flexGrow: 3 },
        { name: 'Actions', prop: 'actions', flexGrow: 4 },
    ];

    formGroup = this.fb.group({
        id: [''],
        ten: ['', Validators.required],
        ma: ['', Validators.required],
        diaChi: ['', Validators.maxLength(100)],
        moTa: [''],
        trangThai: [''],
    });

    constructor(
        private fb: FormBuilder,
        private NhaXuatBanService: NhaXuatBanService,
        private toastrService: ToastrService
    ) {}

    ngOnInit(): void {
        this.prepareData();
    }

    prepareData() {
        this.getNhaXuatBan();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.NhaXuatBanService.updateNhaXuatBan(
                this.formGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getNhaXuatBan();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.NhaXuatBanService.addNhaXuatBan(
                this.formGroup.getRawValue()
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getNhaXuatBan();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getNhaXuatBan() {
        this.NhaXuatBanService.getNhaXuatBan().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue(row);
    }


    delete(id: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.NhaXuatBanService.deleteNhaXuatBan(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.formGroup.reset();
                        this.getNhaXuatBan();
                    },
                    error: (error) => {
                        this.toastrService.error('Failed !!!');
                        console.error(error);
                    },
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    resetForm() {
        this.formGroup.reset();
    }

}


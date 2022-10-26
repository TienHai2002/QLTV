import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/shared/model/page';
import { TacGiaService } from 'src/app/shared/services/tacgia.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.scss']
})
export class TacgiaComponent implements OnInit {
    items = [];
    page = new Page();

    columns = [
        { name: 'STT', prop: 'index', flexGrow: 1.5 },
        { name: 'Name', prop: 'ten', flexGrow: 3 },
        { name: 'Ma', prop: 'ma', flexGrow: 3 },
        { name: 'Mo Ta', prop: 'diaChi', flexGrow: 3 },
        { name: 'Phone number', prop: 'sdt', flexGrow: 3 },
        { name: 'Mo Ta', prop: 'moTa', flexGrow: 3 },
        { name: 'Actions', prop: 'actions', flexGrow: 4 },
    ];

    formGroup = this.fb.group({
        id: [''],
        ten: ['', Validators.required],
        ma: ['', Validators.required],
        diaChi: ['', Validators.maxLength(100)],
        sdt: [''],
        moTa: [''],

    });

    constructor(
        private fb: FormBuilder,
        private TacGiaService: TacGiaService,
        private toastrService: ToastrService
    ) {}

    ngOnInit(): void {
        this.prepareData();
    }

    prepareData() {
        this.getTacGia();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.TacGiaService.updateTacGia(
                this.formGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getTacGia();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.TacGiaService.addTacGia(
                this.formGroup.getRawValue()
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getTacGia();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getTacGia() {
        this.TacGiaService.getTacGia().subscribe((next: any) => {
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
                this.TacGiaService.deleteTacGia(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.formGroup.reset();
                        this.getTacGia();
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

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/shared/model/page';
import { SachService } from 'src/app/shared/services/sach.service';
import { NhaXuatBanService } from 'src/app/shared/services/nhaxuatban.service';
import { TacGiaService } from 'src/app/shared/services/tacgia.service';
import Swal from "sweetalert2";
@Component({
    selector: 'app-sach',
    templateUrl: './sach.component.html',
    styleUrls: ['./sach.component.scss'],
})
export class SachComponent implements OnInit {
    items = [];
    itemNXB :any ;
    itemsTG :any ;

    page = new Page();

    columns = [
        { name: 'STT', prop: 'index', flexGrow: 1.5 },
        { name: 'Name', prop: 'ten', flexGrow: 2 },
        { name: 'Ma', prop: 'ma', flexGrow: 1.5 },
        { name: 'IDNXB', prop: 'idNxb', flexGrow: 2 },
        { name: 'IDTG', prop: 'idTg', flexGrow: 2 },
        { name: 'Chu De', prop: 'chuDe', flexGrow: 2 },
        { name: 'Nha Xuat Ban', prop: 'nxb', flexGrow: 2 },
        { name: 'Mo Ta', prop: 'moTa', flexGrow: 3 },
        { name: 'So Luong Con Lai', prop: 'slcl', flexGrow: 3 },
        { name: 'So Luong Da muon', prop: 'sldm', flexGrow: 3 },
        { name: 'Tong Sach', prop: 'tongSach', flexGrow: 3 },
        { name: 'Actions', prop: 'actions', flexGrow: 4 },
    ];

    formGroup = this.fb.group({
        id: [''],
        ten: ['', Validators.required],
        idNxb: [{id:null}, Validators.required],
        idTg: [{id:null}, Validators.required],
        chuDe: [''],
        ma: [''],
        moTa: [],
        nxb: [''],
        slcl: [''],
        sldm: [''],
        tongSach: [''],
    });

    constructor(
        private fb: FormBuilder,
        private SachService: SachService,
        private toastrService: ToastrService,
        private NhaXuatBanService: NhaXuatBanService,
        private TacGiaService: TacGiaService
    ) {}

    ngOnInit(): void {
        this.prepareData();
        this.getNXB();
        this.getTG();
    }
    getNXB() {
        this.NhaXuatBanService.getNhaXuatBan().subscribe((next: any) => {
            console.log('next', next);
            this.itemNXB = next;
        });
    }
    getTG() {
        this.TacGiaService.getTacGia().subscribe((next: any) => {
            console.log('next', next);
            this.itemsTG = next;
        });
    }
    prepareData() {
        this.getSach();
    }
    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.SachService.updateSach(this.formGroup.getRawValue()).subscribe(
                {
                    next: () => {
                        this.toastrService.success(`Successful`);
                        this.formGroup.reset();
                        this.getSach();
                    },
                    error: (error) => {
                        this.toastrService.error(`Failed !!!`);
                        console.error(error);
                    },
                }
            );
        } else {
            this.SachService.addSach(this.formGroup.getRawValue()).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getSach();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getSach() {
        this.SachService.getSach().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue({
            id: row.id,
            ten: row.ten,
            idNxb: row.idNxb,
            idTg: row.idTg,
            chuDe: row.chuDe,
            ma: row.ma,
            moTa: row.moTa,
            nxb: row.nxb,
            slcl: row.slcl,
            sldm: row.sldm,
            tongSach: row.tongSach,


        });
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
                this.SachService.deleteSach(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.formGroup.reset();
                        this.getSach();
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

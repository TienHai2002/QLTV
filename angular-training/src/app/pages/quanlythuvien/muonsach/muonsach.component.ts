import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Page} from 'src/app/shared/model/page';
import {MuonSachService} from 'src/app/shared/services/muonsach.service';
import {BandocService} from 'src/app/shared/services/bandoc.service';
import {SachService} from 'src/app/shared/services/sach.service';

@Component({
    selector: 'app-muonsach',
    templateUrl: './muonsach.component.html',
    styleUrls: ['./muonsach.component.scss'],
})
export class MuonsachComponent implements OnInit {
    items = [];
    itemsBD: any;
    itemsS: any;
    page = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'ID Ban Doc', prop: 'idBanDoc', flexGrow: 3},
        {name: 'ID Sach', prop: 'idSach', flexGrow: 3},
        {name: 'So Luong', prop: 'soLuong', flexGrow: 3},
        {name: 'Ngay Muon', prop: 'ngayMuon', flexGrow: 3},
        {name: 'Ngay Tra', prop: 'ngayTra', flexGrow: 3},
        {name: 'Trang Thai', prop: 'trangThai', flexGrow: 3},
        {name: 'Ghi chu', prop: 'ghiChu', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];

    formGroup = this.fb.group({
        id: [''],
        idBanDoc: ['', Validators.required],
        idSach: ['', Validators.required],
        soLuong: [''],
        ngayMuon: [''],
        ngayTra: [''],
        trangThai: [''],
        ghiChu: [''],
    });

    
    constructor(
        private fb: FormBuilder,
        private MuonSachService: MuonSachService,
        private toastrService: ToastrService,
        private BandocService: BandocService,
        private SachService: SachService
    ) {
    }

    ngOnInit(): void {
        this.prepareData();
        this.getBandoc();
        this.getSach();

    }

    getSach() {
        this.SachService.getSach().subscribe((next: any) => {
            console.log('next', next);
            this.itemsS = next;
        });
    }

    prepareData() {
        this.getMuonSach();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.MuonSachService.updateMuonSach(
                this.formGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getMuonSach();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.MuonSachService.addMuonSach(
                this.formGroup.getRawValue()
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getMuonSach();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getMuonSach() {
        this.MuonSachService.getMuonSach().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
        });
    }

    edit(row: any) {
        this.formGroup.patchValue(row);
    }

    delete(id: any) {
        this.MuonSachService.deleteMuonSach(id).subscribe({
            next: () => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getMuonSach();
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

    getBandoc() {
        this.BandocService.getBandoc().subscribe((next: any) => {
            console.log('next', next);
            this.itemsBD = next;
        });
    }

}


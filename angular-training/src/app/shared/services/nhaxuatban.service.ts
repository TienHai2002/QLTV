import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NhaXuatBanService {
    readonly API_URL = 'http://localhost:8080/api/nhaxuatban';
    constructor(private http: HttpClient) {}

    getNhaXuatBan(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailNhaXuatBan(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addNhaXuatBan(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateNhaXuatBan(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/nhaxuatban/update`,
            payload
        );
    }

    deleteNhaXuatBan(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}

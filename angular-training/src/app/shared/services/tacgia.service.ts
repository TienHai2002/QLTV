import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TacGiaService {
    readonly API_URL = 'http://localhost:8080/api/tacgia';
    constructor(private http: HttpClient) {}

    getTacGia(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailTacGia(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addTacGia(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateTacGia(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/tacgia/update`,
            payload
        );
    }

    deleteTacGia(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}

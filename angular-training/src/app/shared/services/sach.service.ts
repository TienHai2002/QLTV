import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SachService {
    readonly API_URL = 'http://localhost:8080/api/sach';
    constructor(private http: HttpClient) {}

    getSach(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailSach(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addSach(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateSach(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/sach/update`,
            payload
        );
    }

    deleteSach(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}

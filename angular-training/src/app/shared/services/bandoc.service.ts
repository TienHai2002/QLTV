import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BandocService {
    // getBanDoc() {
    //     throw new Error('Method not implemented.');
    // }
    readonly API_URL = 'http://localhost:8080/api/bandoc';
    constructor(private http: HttpClient) {}

    getBandoc(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailBandoc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addBandoc(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateBandoc(payload: any): Observable<any> {
        return this.http.put(
            `http://localhost:8080/api/bandoc/update`,
            payload
        );
    }

    deleteBandoc(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}

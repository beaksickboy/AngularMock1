import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Routes } from '../share/routes.model';

export interface Chair {
    id: string;
    isAvailable: number;
    price: number;
}
export enum Status {
    WAIT, NO, YES
}

@Injectable({
    providedIn: 'root'
})

export class BookingService {

    seatOrder: Chair[] = [];

    totalPrice: number = 0;

    eventPrice: Subject<number> = new Subject<number>();


    private url = " ";
    private url1 = " ";
    arrChair: Chair[] = [
        { id: 'c01', isAvailable: Status.NO, price: 50000 },
        { id: 'c02', isAvailable: Status.NO, price: 50000 },
        { id: 'c03', isAvailable: Status.NO, price: 50000 },
        { id: 'c04', isAvailable: Status.NO, price: 50000 },
        { id: 'c05', isAvailable: Status.NO, price: 50000 },
        { id: 'c06', isAvailable: Status.NO, price: 50000 },
        { id: 'c07', isAvailable: Status.NO, price: 50000 },
        { id: 'c08', isAvailable: Status.NO, price: 50000 },
        { id: 'c09', isAvailable: Status.NO, price: 50000 },
        { id: 'c10', isAvailable: Status.NO, price: 50000 },
        { id: 'c11', isAvailable: Status.NO, price: 50000 },
        { id: 'c12', isAvailable: Status.NO, price: 50000 },
        { id: 'c13', isAvailable: Status.NO, price: 50000 },
        { id: 'c14', isAvailable: Status.NO, price: 50000 },
        { id: 'c15', isAvailable: Status.NO, price: 50000 },
        { id: 'c16', isAvailable: Status.NO, price: 50000 }
    ];


    constructor(private http: HttpClient) { }

    getListBus(): Observable<Routes[]> {
        return this.http.get<Routes[]>(`${this.url}`);
    }

    getListFrom(): Observable<Routes[]> {
        return this.http.get<Routes[]>(`${this.url1}`);
    }
}

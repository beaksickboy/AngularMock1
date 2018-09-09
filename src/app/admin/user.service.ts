import { User } from './../share/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User2 } from '../share/user2.model';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    user:User2[]=[];
    userChangeSubject = new Subject<boolean>();

    constructor(private httpClient: HttpClient) { }
    getUsers() {
        return   this.httpClient.get('http://localhost:8080/api/users/page=0');
    }

    updateUser(id, u){
        return this.httpClient.put<User2>('http://localhost:8080/api/users/'+id, u);
    }

    getUser(id){
        return this.httpClient.get<User2>('http://localhost:8080/api/users/id/'+id);
    }

    addUser(rID: number, u){
        return this.httpClient.post<User2>('http://localhost:8080/api/users/create/'+ rID, u );
    }

    
}

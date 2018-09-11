import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../share/user.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {


    constructor(private httpClient: HttpClient) { }

    isAdmin: boolean;
    isTS: boolean;
    isLogin: boolean;
    user: User;

    checkUserAccount(username, password) {
        return this.httpClient.post<User>('http://localhost:8080/api/login',
            {
                'userName': username, 'password': password
            });
    }


    createCustomerAccount(userVal) {
        const user = {
            userName: userVal['username'],
            password: userVal['password'],
            email: userVal['email'],
            fullName: userVal['fullname'],
        };
        console.log(user);
        return this.httpClient.post<User>('http://localhost:8080/api/users/create/1', user);
    }

    signOut() {

        let a = confirm("Are you sure?");
        if (a) {
            this.isAdmin = false;
            this.isLogin = false;
            this.isTS = false;
            this.user = null;
        }

    }

    validateUsername(username) {
        return this.httpClient.get('http://localhost:8080/api/users/name/' + username);
    }

}

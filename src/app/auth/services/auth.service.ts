import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from './../../../environments/environment';
import { AuthResponseData } from './../models/authResponseData';
import { User } from './../../shared/models/user.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    public currentUser = new BehaviorSubject<User | null>(null);

    constructor(
        private http: HttpClient
    ) {}

    public signUp(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(
            `${environment.firebase.signUpURL}${environment.firebase.apiKey}`,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        .pipe(
            tap(resData => {
                this.updateUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            })
        );
    }

    public signIn(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(
            `${environment.firebase.signInURL}${environment.firebase.apiKey}`,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        .pipe(
            tap(resData => {
                this.updateUser(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            })
        );
    }

    private updateUser(email: string, id: string, token: string, expiresIn: number):void {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(email, id, token, expirationDate);
        this.currentUser.next(user);
    }
}
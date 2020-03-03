import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    public user = new BehaviorSubject<User>(null);

    private tokenExpirationTimer: any = null;

    constructor(private http: HttpClient, private router: Router) {}

    public signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        .pipe(
            tap(respData => {
                this.handleAuthentication(
                    respData.email,
                    respData.localId,
                    respData.idToken,
                    +respData.expiresIn
                );
            })
        );
    }

    public signIn(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
            {
                email,
                password,
                returnSecureToken: true
            }
        )
        .pipe(
            tap(respData => {
                this.handleAuthentication(
                    respData.email,
                    respData.localId,
                    respData.idToken,
                    +respData.expiresIn
                );
            })
        );
    }

    public autoLogin() {
        const userData: {
            email: string;
            id: string,
            token: string,
            expirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData.token, new Date(userData.expirationDate));

        if (loadedUser.userToken) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData.expirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    public logOut() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');

        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }

        this.tokenExpirationTimer = null;
    }

    public autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(email, userId, token, expirationDate);

        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}

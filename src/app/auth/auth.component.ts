import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
    public isLoading = false;
    public error: string = '';

    private isLoginMode = true;
    private authObservable: Observable<AuthResponseData>;
    private authObservableSubscription: Subscription;

    constructor(private authService: AuthService, private router: Router) {}

    public onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    ngOnDestroy(): void {
        this.authObservableSubscription.unsubscribe();
    }

    public onSubmitForm(form: NgForm): void {
        if (!form.valid) {
            alert('Please enter valid data');
        } else {
            this.isLoading = true;
            this.error = '';

            const email = form.value.email;
            const password = form.value.password;

            if (this.isLoginMode) {
                this.authObservable = this.authService.signIn(email, password);
            } else {
                this.authObservable = this.authService.signUp(email, password);
            }

            this.authObservableSubscription = this.authObservable
                .subscribe(
                    data => {
                        this.isLoading = false;
                        this.router.navigate(['/recipes']);
                    },
                    error => {
                        console.log(error);
                        this.error = 'Error occured!';
                        this.isLoading = false;
                    }
                );

            form.reset();
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { AuthResponseData } from './../models/authResponseData';

@Component({
    selector: 'app-email-login',
    templateUrl: './email-login.component.html',
    styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {
    public isLoginMode = true;
    public isLoading = false;
    public authForm: FormGroup;
    public authObservable: Observable<AuthResponseData>;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    get isPasswordMatch(): boolean {
        if (this.isLoginMode) {
            return true;
        } else {
            return this.authForm.value.password === this.authForm.value.confirmPassword;
        }
    }

    ngOnInit(): void {
        this.initForm();
    }

    public onSwitchMode(): void {
        this.isLoginMode = !this.isLoginMode;
        this.authForm.reset();
    }

    public onSubmitForm(): void {
        const email = this.authForm.value.email;
        const password = this.authForm.value.password;

        this.isLoading = true;

        try {
            if (this.isLoginMode) {
                this.authObservable = this.authService.signIn(email, password);
            } else {
                this.authObservable = this.authService.signUp(email, password);
            }

            this.authObservable.subscribe(userInfo => {
                this.authForm.reset();
                this.router.navigate(['/recipes']);
            });
        } catch (error) {
            console.log(error);
        }

        this.isLoading = false;
    }

    private initForm(): void {
        this.authForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('')
        });
    }
}

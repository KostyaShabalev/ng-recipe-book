import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-email-login',
    templateUrl: './email-login.component.html',
    styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {
    public isLoginMode = true;
    public isLoading = false;
    public authForm: FormGroup;

    constructor(
        private fireAuth: AngularFireAuth
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
    }

    public async onSubmitForm(): Promise<any> {
        const email = this.authForm.value.email;
        const password = this.authForm.value.password;

        this.isLoading = true;

        try {
            if (this.isLoginMode) {
                await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
            } else {
                await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
            }
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

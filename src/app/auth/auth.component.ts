import {Component} from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    constructor(
        public angularFireAuth: AngularFireAuth
    ) {}

    // public onShowAuthState () {
    //     this.angularFireAuth.authState.subscribe(res => {
    //         console.log(Boolean(res));
    //     })
    // }

    // public onLogOut() {
    //     this.angularFireAuth.auth.signOut();
    // }
}
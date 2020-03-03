import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from './../../shared/services/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public isAuthenticated = false;

    private userSubscription: Subscription;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    ngOnInit(): void {
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    public onSaveRecipes() {
        this.dataStorageService.storeRecipes();
    }

    public onFetchRecipes() {
        this.dataStorageService
            .fetchRecipes()
            .subscribe();
    }

    public onLogout() {
        this.authService.logOut();
    }

}

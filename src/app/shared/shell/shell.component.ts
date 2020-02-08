import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-shell',
    templateUrl: 'shell.component.html',
    styleUrls: ['shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
    public isAuthenticated = false;
    private userSubscription: Subscription;

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private authService: AuthService
        ) {}

    public ngOnInit(): void {
        this.userSubscription = this.authService.currentUser
            .subscribe(user => {
                this.isAuthenticated = user ? true : false;
            });
    }

    public ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    public onLogout(): void {
        this.authService.logout();
    }
}

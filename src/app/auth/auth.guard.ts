import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.authService.currentUser.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;

                if (isAuth) {
                    return true;
                }

                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}

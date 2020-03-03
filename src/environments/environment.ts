// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAVD8xd7ycw9jJU71wTK8Xfjxk5iVvmDF4',
        authDomain: 'ng-recipe-book-10ad4.firebaseapp.com',
        databaseURL: 'https://ng-recipe-book-10ad4.firebaseio.com',
        signUpURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
        signInURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
        projectId: 'ng-recipe-book-10ad4',
        storageBucket: 'ng-recipe-book-10ad4.appspot.com',
        messagingSenderId: '729921334099',
        appId: '1:729921334099:web:a41fb151782c50b3ad8fa6'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

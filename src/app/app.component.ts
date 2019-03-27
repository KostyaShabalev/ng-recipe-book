import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyAVD8xd7ycw9jJU71wTK8Xfjxk5iVvmDF4",
			authDomain: "ng-recipe-book-10ad4.firebaseapp.com",
			databaseURL: "https://ng-recipe-book-10ad4.firebaseio.com",
			projectId: "ng-recipe-book-10ad4",
			storageBucket: "ng-recipe-book-10ad4.appspot.com",
			messagingSenderId: "729921334099"
		});
	}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

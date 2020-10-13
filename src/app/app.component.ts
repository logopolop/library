import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBPs2b19OgynBOJkXcLcUNc1tGkHFBVTCk",
      authDomain: "mylibrary-9260c.firebaseapp.com",
      databaseURL: "https://mylibrary-9260c.firebaseio.com",
      projectId: "mylibrary-9260c",
      storageBucket: "mylibrary-9260c.appspot.com",
      messagingSenderId: "213941965924",
      appId: "1:213941965924:web:93ef2734836a07a15e7b71"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
  }

}

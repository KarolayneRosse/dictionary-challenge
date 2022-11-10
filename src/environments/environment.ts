// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  firebase: {
    apiKey: "AIzaSyCG4oFtE8VvFdYCvASNfjB2zOy8MTZHErQ",
    authDomain: "dictionary-challenge-e7b58.firebaseapp.com",
    projectId: "dictionary-challenge-e7b58",
    storageBucket: "dictionary-challenge-e7b58.appspot.com",
    messagingSenderId: "1066008195600",
    appId: "1:1066008195600:web:0dd826b74eea0aef1f1095",
    measurementId: "G-S8ZHHN4DE1"
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

### `yarn start`
### `yarn build`
### `yarn build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# firebase
## setup
1. create new project on firebase console https://console.firebase.google.com
2. create new file firebase.js under src folder
3. install fire base `yarn add firebase` https://www.npmjs.com/package/firebase
4. goto firebase console
   add web app
   Firebase will give the code, copy and paste to the firebase.js file
   ```js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth =getAuth()
   ```
## auth
1. https://firebase.google.com/docs/auth/web/password-auth
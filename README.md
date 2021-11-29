## React Todo - User Authentication

This is a Todo list app in react where we have added the login authentication using the email and password provider from the firebase SDK.

## Setting up the project:

1.  Create a file in the root of your project call
```
    .env.local
```
2. In this file you need to paste in  the keys from the firebase console for the app you setup in the firebase project.
```json
    NEXT_PUBLIC_FIREBASE_API_KEY=your-key-here
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-key-here
    NEXT_PUBLIC_FIREBASE_DATABASE_URL=your-key-here
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-key-here
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_APP_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-key-here
``` 
3. Add a config file in the firebase directory and paste this.
```javascript
   const firebaseCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   }
   export firebaseCredentials
```
4. Please run the following to set up node modules.
```
    npm install
```
5. Run the build used.
```
    npm dev run
```

## [View live on Vercel](https://todoreact-a3-4c7x74p1l-jagriti13khanna.vercel.app/)
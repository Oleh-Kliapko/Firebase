export class UserFetch {
  static async createUser(userData) {
    return await fetch(
      'https://filmoteka-5f282-default-rtdb.europe-west1.firebasedatabase.app/user_data.json',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  static async getUserData(userEmail, userPassword) {
    return await fetch(
      `https://filmoteka-5f282-default-rtdb.europe-west1.firebasedatabase.app/${userEmail}.json`
    ).then(response => response.json());
  }
}

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA1oawHx9OBKcWYPMFokrokQ49GpJnNWSw',
//   authDomain: 'filmoteka-5f282.firebaseapp.com',
//   databaseURL:
//     'https://filmoteka-5f282-default-rtdb.europe-west1.firebasedatabase.app/',
//   projectId: 'filmoteka-5f282',
//   storageBucket: 'filmoteka-5f282.appspot.com',
//   messagingSenderId: '166403856730',
//   appId: 'APP_ID',
//   // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//   measurementId: 'G-MEASUREMENT_ID',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

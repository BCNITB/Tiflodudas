AIzaSyCCbZdyp0b2kvnPqUcBHll1b1zfQ_AMlkg

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
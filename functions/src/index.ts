import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp();
exports.triggerUser = functions.auth.user().onCreate((user) => {
  console.log("user created");
  return admin
    .firestore()
    .collection('utilisateurs').doc(user.uid).set({
      email: user.email
    });
});
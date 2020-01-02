const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();


admin.initializeApp();
const firebaseConfig = {
    apiKey: "AIzaSyAZpeqoEsIs0ZjMZRMVhl9Okf_uwVZole0",
    authDomain: "social-app-4d32e.firebaseapp.com",
    databaseURL: "https://social-app-4d32e.firebaseio.com",
    projectId: "social-app-4d32e",
    storageBucket: "social-app-4d32e.appspot.com",
    messagingSenderId: "488521372555",
    appId: "1:488521372555:web:c177a9e5c27a7c10b2958e"
  };

const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();


app.get('/screams', (request, response) => {
    db
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
        .then(data => {
            let screams = [];
            data.forEach(doc => {
                screams.push({
                    screamId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt
                });
            });
            return response.json(screams);
        })
        .catch(err => console.error(err));
})


app.post('/scream', (request, response) => {
    const newScream = {
        body: request.body.body,
        userHandle: request.body.userHandle,
        createdAt: new Date().toISOString()
    };

    admin
        .firestore()
        .collection('screams')
        .add(newScream)
        .then((doc) => {
            response.json({message: `document ${doc.id} created successfully`});
        })
        .catch((err) => {
            response.status(500).json({error: "something went wrong"})
            console.error(err);
        });
})

//best practice: https://baseurl.com/api/

//signup route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };

    //TODO: validate data
    let token, userId;
    db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if(doc.exists){
                return res.status(400).json({handle: 'this handle is already taken'});
            } else {
                return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
            }
        })
        .then(data => {
            userId = data.user.uid;
            //return access token
            return data.user.getIdToken();
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            };

            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then((data) => {
            return res.status(201).json({ token })
        })
        .catch( err => {
            console.error(err);
            if(err.code === "auth/email-already-in-use"){
                return res.status(400).json({email: "email is already in use"})
            } else{
                return res.status(500).json({error: err.code});
            }
        })

    // firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    //     .then(data => {
    //         //201: resource created
    //         return res.status(201).json({message: `user ${data.user.uid} signed up successfully`});
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         return res.status(500).json({error: err.code});
    //     })
})
exports.api = functions.https.onRequest(app);
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDJaaqzyhK3iNBkW-RBW73PamTDqiErNGs',
	authDomain: 'eshop-68dca.firebaseapp.com',
	projectId: 'eshop-68dca',
	storageBucket: 'eshop-68dca.appspot.com',
	messagingSenderId: '1035158994074',
	appId: '1:1035158994074:web:9c43ec9669424e18afb323',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};

import admin from 'firebase-admin';
const serviceAccount = require('../../secret.json');

export const verifyIdToken = (token) => {
	if (!admin.apps.length) {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL:
				' https://ecommerce-auth-85992-default-rtdb.firebaseio.com',
		});
	}

	return admin
		.auth()
		.verifyIdToken(token)
		.catch((error) => {
			throw error;
		});
};

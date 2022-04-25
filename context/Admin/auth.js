import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './firebaseClient';
import firebase from 'firebase'
const authContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		
	}, []);
	const getUser = () => {
		auth.onAuthStateChanged((currentUser) => {
			if (user) {
				db.collection('users').doc(user.uid).set(
					{
						email: user.email,
						lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
						photoURL: user.photoURL,
					},
					{ merge: true }
				);
			}
			setUser(currentUser);
		});
	};

	return (
		<authContext.Provider value={{ user, getUser }}>
			{children}
		</authContext.Provider>
	);
};

export const useAuth = () => useContext(authContext);

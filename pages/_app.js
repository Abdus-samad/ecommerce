import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import CartState from '../context/Cart/CartState';
import ProductState from '../context/Product/ProductState';
import AuthState from '../context/Auth/AuthState';
import ProfileState from '../context/Profile/ProfileState';
import AddressState from '../context/Address/AddressState';
import { AuthProvider, useAuth } from '../context/Admin/auth';
import firebase from 'firebase';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<AddressState>
				<ProfileState>
					<CartState>
						<ProductState>
							<Component {...pageProps} />
						</ProductState>
					</CartState>
				</ProfileState>
			</AddressState>
		</AuthProvider>
	);
}

export default MyApp;

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import CartState from '../context/Cart/CartState';
import ProductState from '../context/Product/ProductState';
import AuthState from '../context/Auth/AuthState';
import ProfileState from '../context/Profile/ProfileState';
import AddressState from '../context/Address/AddressState';

function MyApp({ Component, pageProps }) {
	return (
		<AuthState>
			<AddressState>
				<ProfileState>
					<CartState>
						<ProductState>
							<Component {...pageProps} />
						</ProductState>
					</CartState>
				</ProfileState>
			</AddressState>
		</AuthState>
	);
}

export default MyApp;

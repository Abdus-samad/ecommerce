import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import CartState from '../context/Cart/CartState';
import ProductState from '../context/Product/ProductState';
import AuthState from '../context/Auth/AuthState';

function MyApp({Component, pageProps}) {
	return (
		<AuthState>
			<CartState>
				<ProductState>
					<Component {...pageProps} />
				</ProductState>
			</CartState>
		</AuthState>
	);
}

export default MyApp;

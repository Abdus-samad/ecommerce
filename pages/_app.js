import '../styles/globals.css';
import '../styles/Style.css';
import 'tailwindcss/tailwind.css';
import CartState from '../context/Cart/CartState';
import ProductState from '../context/Product/ProductState';

function MyApp({Component, pageProps}) {
	return (
		<CartState>
			<ProductState>
				<Component {...pageProps} />
			</ProductState>
		</CartState>
	);
}

export default MyApp;

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import State from '../context/Cart/CartState';

function MyApp({Component, pageProps}) {
	return (
		<State>
			<Component {...pageProps} />
		</State>
	);
}

export default MyApp;

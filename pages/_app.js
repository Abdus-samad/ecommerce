import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import CartState from "../context/Cart/CartState";
import ProductState from "../context/Product/ProductState";
import { AuthProvider } from "../context/Auth/auth";
import { ProfileState } from "../context/firebase/database";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProfileState>
        <CartState>
          <ProductState>
            <Component {...pageProps} />
          </ProductState>
        </CartState>
      </ProfileState>
    </AuthProvider>
  );
}

export default MyApp;

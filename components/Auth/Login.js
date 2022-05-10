import { useContext, useState } from "react";
import { loginContext } from "./loginContext";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../context/Auth/firebaseClient";
import { useAuth } from "../../context/Auth/auth";

const LoginForm = () => {
  const { SwitchToRegister, SwitchToReset } = useContext(loginContext);
  const { signWithGoogle } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const msg = error.message;
      toast.error(msg, {
        theme: "colored",
      });
    });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="block w-full h-12 px-5 mb-3 text-base text-gray-800 transition-all duration-100 bg-gray-300 border border-gray-300 rounded ease"
          value={email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          className="block w-full h-12 px-5 mb-3 text-base text-gray-800 transition-all duration-100 bg-gray-300 border border-gray-300 rounded ease"
          value={password}
          name="password"
          onChange={onChange}
        />
        <button className="flex items-center justify-center flex-shrink-0 w-full h-12 px-8 text-base font-bold text-center text-white transition-all duration-100 bg-green-600 border-0 rounded cursor-pointer ease">
          Continue
        </button>
      </form>
      <div className="relative flex items-center justify-center w-full py-4">
        <span className="relative px-3 text-base font-medium text-gray-800">
          or
        </span>
      </div>
      <button
        onClick={() => signWithGoogle()}
        className="flex items-center justify-center flex-shrink-0 w-full h-12 px-8 mb-4 text-base font-bold text-center text-white transition-all duration-100 bg-blue-600 border-0 rounded cursor-pointer ease"
      >
        Continue with Google
      </button>
      <p className="p-5 text-base font-medium text-gray-500">
        Don't have any account?
        <button
          onClick={SwitchToRegister}
          className="font-bold text-green-700 underline bg-transparent border-0 cursor-pointer otline-0"
        >
          SignUp
        </button>
      </p>
      <p className="p-5 text-base font-medium text-gray-500">
        Forgot your password?
        <button
          onClick={SwitchToReset}
          className="font-bold text-green-700 underline bg-transparent border-0 cursor-pointer otline-0"
        >
          Reset It
        </button>
      </p>
    </>
  );
};

export default LoginForm;

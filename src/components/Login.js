import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
          alt="movieslistimage"
        />
      </div>
      <form className="bg-black rounded-lg bg-opacity-80 text-white absolute my-36 mx-auto right-0 left-0 w-3/12 p-12">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700 p-4 my-4 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-4 my-4 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-4 w-full rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer font-semibold"
          onClick={toggleSignInSignUpForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already a user? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;

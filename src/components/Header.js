import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && <div className="flex gap-2 p-4">
        <img className="w-16 rounded-full" src={user.photoURL} alt="user-icon" />
        <button
          onClick={handleSignOut}
          className="relative w-36 bg-red-600 text-white py-4 font-bold uppercase transition duration-200 ease-in-out rounded shadow-lg opacity-80 tracking-wide hover:opacity-100 active:top-1 active:shadow-md active:shadow-red-700"
        >
          signout
        </button>
      </div>}
    </div>
  );
};
export default Header;

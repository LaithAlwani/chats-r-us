import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../lib/hooks";

export default function Login() {
  const { user } = useIsLoggedIn();
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      {user ? (
        <h3>You Are already logged in</h3>
      ) : (
        <>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <button onClick={loginWithGoogle}>Google Login</button>
        </>
      )}
    </div>
  );
}

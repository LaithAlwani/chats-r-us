import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useIsLoggedIn } from "../lib/hooks";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

const Navbar = () => {
  const {user} = useIsLoggedIn();

  const logout = () => {
    signOut(auth).then((result) => {
      console.log(result);
    });
  };

  return (
    <nav>
      <div className="logo">
        <h3>Chats' r us</h3>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats</Link>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return <p>copyright 2021</p>;
};

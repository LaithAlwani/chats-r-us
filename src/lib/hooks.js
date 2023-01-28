import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


export const useIsLoggedIn = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    let unSubscribe;
    unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in");
        setUser(user);
      } else {
        console.log("userlogged out");
        setUser(null);
      }
    });
    return ()=>unSubscribe
  }, [user]);
  return {user};
};

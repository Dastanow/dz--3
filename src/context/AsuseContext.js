import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AsuseContecst = createContext(null);

export const AususeProvider = (props) => {
    const [ user, setUser] = useState(null);
    // const [stait, setStait] = useContext()
    const auth = getAuth();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, [auth]);

  const Inputt = async (email, password) => { 
    // debugger 
    await createUserWithEmailAndPassword(auth,email,password)
  //  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  const data = {
    Inputt,
    logout,
    user,
    // unsubscribe,
    
  }


return(
    <AsuseContecst.Provider value={data}>{props.children}</AsuseContecst.Provider>
)
}
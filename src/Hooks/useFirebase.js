import React, { useEffect, useState } from 'react';
import initAuth from '../Pages/Login/firebase.init';
import { getAuth, signInWithPopup,onAuthStateChanged, GoogleAuthProvider,signOut } from "firebase/auth";


initAuth()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading,setIsloading]= useState(true)
  const auth = getAuth()
  const googleProvider =new GoogleAuthProvider()
  
  ///user state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsloading(false)
    });
  },[])


  ///sign in with google
  const googleSignIn = () => {
    setIsloading(true)
   return signInWithPopup(auth, googleProvider)
  
  }


  ///signOut

  const logout = () => {
    setIsloading(true)
    signOut(auth).then(() => {
      
    }).catch((error) => {
      
    }).finally(()=>setIsloading(false))
  }

  return {
    user,
    setUser,
    setIsloading,isLoading,
    googleSignIn,logout
  }
};


export default useFirebase;
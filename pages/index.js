import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import {useState,useEffect} from 'react'
import Organization from './sections/Organizations'
import Login from './sections/Login'
import firebase from 'firebase/compat/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification,signInWithEmailAndPassword,signOut} from "firebase/auth";
import 'firebase/compat/auth'
import 'firebase/compat/database'
import NewLoginPage from './sections/newLogin'
import TestLogin from './sections/testlogin'
export default function Home() {
  
    const app = firebase.initializeApp({
      apiKey: "AIzaSyC8PAjtH7S7GeSlsETbpasTzWGaxgogNYc",
      authDomain: "phishing-a3448.firebaseapp.com",
      projectId: "phishing-a3448",
      storageBucket: "phishing-a3448.appspot.com",
      messagingSenderId: "246349650818",
      appId: "1:246349650818:web:457b6a6d845ec5204dcd9b",
      measurementId: "G-4ZLBYMV7Y1"
    })
    let auth = firebase.auth(app)
    let [user] = useAuthState(auth)
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    console.log(user)
  let [isOrganizatinSelected,setIsOrganizationSelected] = useState(false)
  let [isLoggedIn , setIsLoggedIn] = useState(false) 
  let signUp = ()=>{
    let auth = getAuth()
    try{
      createUserWithEmailAndPassword(auth,email,password)
      alert('user created')
    }catch(ex){
      alert(ex)
    }
  }
  let SignIn = ()=>{
    alert(`email: ${email} passowrd : ${password}` )
    let auth = getAuth()
    console.log(auth)
    signInWithEmailAndPassword(auth,email,password).then(e=>{
      setIsLoggedIn(true);
      alert('welcome')
    }).catch(e=>{
      alert(e)
    })
    alert('test')
  }
  return (
    <div className={styles.container}>
       <Nav/>
      {isOrganizatinSelected &&user && <Dashboard/>}
      {!isOrganizatinSelected && user &&<Organization user={user} firebase={firebase} auth={auth} signout={signOut}/>}
      {!user && <NewLoginPage onEmailEnter={e=>setEmail(e.target.value)} onPasswordEnter={e=>setPassword(e.target.value)} onSingup={signUp} onSignIn={SignIn}/>}
   
    </div>
  )
}

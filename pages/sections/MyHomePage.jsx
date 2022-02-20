import { useState ,useEffect} from "react"
import MaterialButton from "../components/MaterialButton"
import TextArea from "../components/TextArea"
import firebase from 'firebase/compat/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth, signOut} from "firebase/auth";
let MyHomePage = ()=>{
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
      let [newuser] = useAuthState(auth)
    let [page1,showPage1] = useState(true)
    let [page2,showPage2] = useState(false)
    let disableAll = ()=>{
        showPage1(false)
        showPage2(false)
    }
    let ShowPage1 = ()=>{
        disableAll()
        showPage1(true)
    }
    let ShowPage2 = ()=>{
        disableAll()
        showPage2(true)
    }
    useEffect(()=>{
        let newApp = getAuth()
    },[])
    return(
        <section className="text-gray-600 body-font h-screen overflow-scroll">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Phish Node
                </h1>
                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div className="flex justify-center">
                    <button onClick={ShowPage1} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <button onClick={ShowPage2} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div>
                 {page1 &&<Paragraph text={"Phish Node Attack simulation training lets you run benign cyber attack simulations on your organization to test your security policies and practices."}/>}
                 {page2 && <Paragraph text={"This is just the beginning. We're invested in building a one-stop shop to meet all your security needs across Microsoft 365. But we need your help. Join the Windows insider programs to preview and review the latest enhancements. Leave feedback right here in Microsoft 365 Defender anytime to help us build the right solutions for you."}/>}
                 {page2 && <textarea className="border-2 outline-none w-10/12 h-24 p-2"/>}
                 {page2 && <div className="btn md:w-5/6 sm:w-11/12 lg:w-1/4">
                    <MaterialButton title={"Submit Feedback"}/>
                 </div> 
                 }
                </div>
            </div>
            <hr className="mt-3"/>
</section>
    )
}
let Paragraph = ({text})=>{
    return(
        <p className="mt-3">{text}</p>
    )
}
export default MyHomePage
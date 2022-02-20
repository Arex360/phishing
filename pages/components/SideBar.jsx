
import { AiFillFund, AiFillMail } from 'react-icons/ai'
import {IoCodeSharp, IoLogOut, IoRadio, IoRadioOutline,IoPersonAdd,IoPeopleSharp,IoShieldCheckmark} from 'react-icons/io5'
import {faHome,FaAdjust, FaHome, FaMailBulk, FaDashcube, FaPeopleArrows, FaInternetExplorer, FaSignOutAlt} from 'react-icons/fa'
import MaterialButton from "./MaterialButton"
import {VscVmRunning,VscSettingsGear} from 'react-icons/vsc'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth, signOut} from "firebase/auth";
let SideBar = ({onHomePageClick,onCompaignClick, onUserClick,onEmailClick,onSendingClick,OnSettingsClick,onLandingPageClick,onSendEmail})=>{
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
    return (
        <div className="bg-gray-900 mt-30 w-56 flex flex-col justify-between overflow-y-scroll  px-2  text-white text-xl gap-1 cursor-pointer">
           <div className="mid">
               <div className="py-10"></div>
                <MenuItem Component={FaHome} title="Home" onClick={onHomePageClick}/>
                <MenuItem Component={AiFillFund} title="Dashboard" onClick={onCompaignClick}/>
                <MenuItem Component={FaPeopleArrows} title={'User & Groups'} expandable={true} onClick={onUserClick}>
                     <MenuItem Component={IoPersonAdd} title="Add User" onClick={onCompaignClick} overidable={true}/>
                     <MenuItem Component={IoPeopleSharp} title="Add Group" onClick={onCompaignClick} overidable={true}/>
                     <MenuItem Component={IoShieldCheckmark} title="Add Roles" onClick={onCompaignClick} overidable={true}/>
                </MenuItem>
                <MenuItem Component={AiFillMail} title={"Email Setup"} />
                <MenuItem Component={FaMailBulk} title={"Email Templates"}/>
                <MenuItem Component={IoCodeSharp} title="Website Templates"/>
                <MenuItem Component={IoRadioOutline} title="Compaigns"/>
                <MenuItem Component={VscVmRunning} title="Learning Hub"/>
                <MenuItem Component={VscSettingsGear} title="Settings"/>
           </div>
           <div className="end">
                <MenuItem onClick={()=>{
                    signOut(auth)
                }} Component={FaSignOutAlt}  title="Logout"/>
           </div>
        </div>
    )
}
let MenuItem = ({Component,title,expandable,onClick,children,overidable})=>{
    let [hover,SetHover] = useState(false)
    let [open,SetOpen] = useState(false)
    return(
        <div onMouseEnter={()=>SetHover(true)} onMouseLeave={()=>SetHover(false)} onClick={()=>SetOpen(!open)} className="upper">
        <div className={`menuitem w-full rounded-md px-1 flex justify-between items-center gap-4 hover:bg-gray-800 ${overidable ?'py-2':'py-5'} `} onClick={onClick}>
            <div className="left flex  items-center gap-4">
                <Component/>
                <h6 className='text-sm'>{title}</h6>
            </div>
            <div className="right">
                {expandable && <Gridspot/>}
            </div>
        </div>
        <div className="children w-3/4 mx-auto text-sm">
                    {(hover || open) && children}
                </div>
        </div>
    )
}
let Gridspot = ()=>{
    return(
        <div className="gridspot flex flex-col gap-1 scale-50">
            <div className="lines bg-gray-300 w-5 h-1"></div>
            <div className="lines bg-gray-300 w-5 h-1"></div>
            <div className="lines bg-gray-300 w-5 h-1"></div>
        </div>
    )
}
export default SideBar
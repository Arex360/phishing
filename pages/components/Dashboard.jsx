import Body from "./Body"
import SideBar from "./SideBar"
import {useState} from 'react'
let Dashboard = ()=>{
    let [compaign,setShowCompaign] = useState(false)
    let [user,setShowuser] = useState(false)
    let [email,setShowemail] = useState(false)
    let [profile,setShowprofile] = useState(false)
    let [setting,setShowsetting] = useState(false)
    let disableAll = ()=>{
        setShowCompaign(false)
        setShowuser(false)
        setShowemail(false)
        setShowprofile(false)
        setShowsetting(false)
    }
    let enableCompaign = ()=>{
        disableAll()
        setShowCompaign(true)
    }
    let enableUser = ()=>{
        disableAll()
        setShowuser(true)
    }
    let enableEmail = ()=>{
        disableAll()
        setShowemail(true)
    }
    let enableProfile = ()=>{
        disableAll()
        setShowprofile(true)
    }
    let enableSettings = ()=>{
        disableAll()
        setShowsetting(true)
    }
    return (
        <div className="dash w-full h-screen flex z-50">
            <SideBar onCompaignClick={enableCompaign} OnSettingsClick={enableSettings} onEmailClick={enableEmail} onSendingClick={enableProfile} onUserClick={enableUser}/>
            <Body compaign={compaign} emailTemplate={email} sendingProfile={profile} settings={setting} usergroup={user}/>
        </div>
    )
}
export default Dashboard
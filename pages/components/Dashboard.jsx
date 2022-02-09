import Body from "./Body"
import SideBar from "./SideBar"
import {useState} from 'react'
let Dashboard = ({fuser,firebase,organization})=>{
    let [compaign,setShowCompaign] = useState(false)
    let [user,setShowuser] = useState(false)
    let [email,setShowemail] = useState(false)
    let [profile,setShowprofile] = useState(false)
    let [setting,setShowsetting] = useState(false)
    let [landingPage,setShowLandingPage] = useState(false)
    let [EmailPage,setShowEmailPage] = useState(false)
    let disableAll = ()=>{
        setShowCompaign(false)
        setShowuser(false)
        setShowemail(false)
        setShowprofile(false)
        setShowsetting(false)
        setShowLandingPage(false)
        setShowEmailPage(false)
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
    let enableLandingPage = ()=>{
        disableAll()
        setShowLandingPage(true)
    }
    let enableSetEmailPage =()=>{
        disableAll()
        setShowEmailPage(true)
    }
    return (
        <div className="dash w-full h-screen flex z-50">
            <SideBar onSendEmail={enableSetEmailPage} onCompaignClick={enableCompaign} OnSettingsClick={enableSettings} onEmailClick={enableEmail} onSendingClick={enableProfile} onUserClick={enableUser} onLandingPageClick={enableLandingPage}/>
            <Body sendEmail={EmailPage} landingPage={landingPage} compaign={compaign} emailTemplate={email} sendingProfile={profile} settings={setting} usergroup={user} firebase={firebase} user={fuser} organization={organization}/>
        </div>
    )
}
export default Dashboard
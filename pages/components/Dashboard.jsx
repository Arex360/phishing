import Body from "./Body"
import SideBar from "./SideBar"
import {useEffect, useState} from 'react'
let Dashboard = ({fuser,firebase,organization,auth,signout})=>{
    let [compaign,setShowCompaign] = useState(false)
    let [user,setShowuser] = useState(false)
    let [email,setShowemail] = useState(false)
    let [profile,setShowprofile] = useState(false)
    let [setting,setShowsetting] = useState(false)
    let [landingPage,setShowLandingPage] = useState(false)
    let [EmailPage,setShowEmailPage] = useState(false)
    let [homepage,setShowHomePage] = useState(false)
    let [learningHub,setShowLearningHub] = useState(false)
    let [addUser,setAddUser] = useState(false)
    let disableAll = ()=>{
        setShowCompaign(false)
        setShowuser(false)
        setShowemail(false)
        setShowprofile(false)
        setShowsetting(false)
        setShowLandingPage(false)
        setShowEmailPage(false)
        setShowHomePage(false)
        setShowLearningHub(false)
        setAddUser(false)
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
    let enableSetHomePage=()=>{
        disableAll()
        setShowHomePage(true)
    }
    let enableLearningHub=()=>{
        disableAll()
        setShowLearningHub(true)
    }
    let enableAddUser = ()=>{
        disableAll()
        setAddUser(true)
    }
    useEffect(()=>{
        let navorg = document.getElementById("companyname");
        navorg.innerHTML = `PhishCode | ${organization}`
    },[])
    return (
        <div className="dash relative w-full h-screen  flex justify-between ">
            <SideBar onSendEmail={enableSetEmailPage} onCompaignClick={enableCompaign} OnSettingsClick={enableSettings} onEmailClick={enableEmail} onSendingClick={enableProfile} onUserClick={enableUser} onLandingPageClick={enableLandingPage} onHomePageClick={enableSetHomePage} onLearningHubClick={enableLearningHub} auth={auth} signout={signout} onAddUser={enableAddUser}/>
            <Body sendEmail={EmailPage} landingPage={landingPage} compaign={compaign} emailTemplate={email} sendingProfile={profile} settings={setting} usergroup={user} firebase={firebase} user={fuser} organization={organization} homepage={homepage} learningpage={learningHub} addUser={addUser} />
        </div>
    )
}
export default Dashboard
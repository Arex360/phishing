import { useEffect } from "react"
import AddUser from "../sections/AddUser"
import Compaign from "../sections/Compaign"
import LearningHub from "../sections/LearningHub"
import MyHomePage from "../sections/MyHomePage"
import SendEmail from "../sections/SendEmail"
import EmailTemplate, { LandingPageTemplate } from "../sections/Templates"
import Userpanel from "../sections/UserPanel"
import UserGroup from "../sections/UserSection"
import Alert from "./alert"
import Row from "./Row"

let Body = ({compaign,usergroup,emailTemplate,sendingProfile,settings,landingPage,user,firebase,organization,sendEmail,homepage,learningpage,addUser})=>{
    useEffect(()=>{
        alert(user)
    },[])
    return (
        <div className="body w-11/12 h-full p-">
            {compaign && <Compaign/>}
            {usergroup && true && <Userpanel user={user} firebase={firebase} organizationName={organization}/>}
            {usergroup && false && <UserGroup user={user} firebase={firebase} organizationName={organization}/>}
            {sendEmail && <SendEmail user={user}/>}
            {emailTemplate && <EmailTemplate/>}
            {sendingProfile && <Compaign/>}
            {settings && <Compaign/>}
            {landingPage && <LandingPageTemplate/>}
            {homepage && <MyHomePage/>}
            {learningpage && <LearningHub/>}
            {addUser && <AddUser/>}
        </div>
    )
}
export default Body
import { useEffect } from "react"
import Compaign from "../sections/Compaign"
import MyHomePage from "../sections/MyHomePage"
import SendEmail from "../sections/SendEmail"
import EmailTemplate, { LandingPageTemplate } from "../sections/Templates"
import UserGroup from "../sections/UserSection"
import Alert from "./alert"
import Row from "./Row"

let Body = ({compaign,usergroup,emailTemplate,sendingProfile,settings,landingPage,user,firebase,organization,sendEmail,homepage})=>{
    useEffect(()=>{
        alert(user)
    },[])
    return (
        <div className="body w-11/12 h-full p-">
            {compaign && <Compaign/>}
            {usergroup && <UserGroup user={user} firebase={firebase} organizationName={organization}/>}
            {sendEmail && <SendEmail user={user}/>}
            {emailTemplate && <EmailTemplate/>}
            {sendingProfile && <Compaign/>}
            {settings && <Compaign/>}
            {landingPage && <LandingPageTemplate/>}
            {homepage && <MyHomePage/>}
        </div>
    )
}
export default Body
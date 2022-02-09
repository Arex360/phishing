import Compaign from "../sections/Compaign"
import SendEmail from "../sections/SendEmail"
import EmailTemplate, { LandingPageTemplate } from "../sections/Templates"
import UserGroup from "../sections/UserSection"
import Alert from "./alert"
import Row from "./Row"

let Body = ({compaign,usergroup,emailTemplate,sendingProfile,settings,landingPage,user,firebase,organization,sendEmail})=>{
    return (
        <div className="body w-5/6 h-full p-20 -z-10">
            {compaign && <Compaign/>}
            {usergroup && <UserGroup user={user} firebase={firebase} organizationName={organization}/>}
            {sendEmail && <SendEmail user={user}/>}
            {emailTemplate && <EmailTemplate/>}
            {sendingProfile && <Compaign/>}
            {settings && <Compaign/>}
            {landingPage && <LandingPageTemplate/>}
        </div>
    )
}
export default Body
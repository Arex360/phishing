import Compaign from "../sections/Compaign"
import EmailTemplate from "../sections/Templates"
import UserGroup from "../sections/UserSection"
import Alert from "./alert"
import Row from "./Row"

let Body = ({compaign,usergroup,emailTemplate,sendingProfile,settings,user,firebase,organization})=>{
    return (
        <div className="body w-5/6 h-full p-20 -z-10">
            {compaign && <Compaign/>}
            {usergroup && <UserGroup user={user} firebase={firebase} organizationName={organization}/>}
            {emailTemplate && <EmailTemplate/>}
            {sendingProfile && <Compaign/>}
            {settings && <Compaign/>}
        </div>
    )
}
export default Body
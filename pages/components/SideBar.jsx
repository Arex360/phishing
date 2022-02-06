import MaterialButton from "./MaterialButton"

let SideBar = ({onCompaignClick, onUserClick,onEmailClick,onSendingClick,OnSettingsClick})=>{
    return (
        <div className="sidebar w-1/6 h-full p-10">
            <MaterialButton onClick={onCompaignClick} title={"Compaigns"}/>
            <MaterialButton title={"User & Groups"} onClick={onUserClick}/>
            <MaterialButton title={"Email Templates"} onClick={onEmailClick}/>
            <MaterialButton title={"Sending Profiles"} onClick={onSendingClick}/>
            <MaterialButton title={"Settings"} onClick={OnSettingsClick}/>
        </div>
    )
}
export default SideBar
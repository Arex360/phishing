import Alert from "../components/alert"
import Row from "../components/Row"

let Compaign = ()=>{
    return(
        <div className="bg-slate-500 z-40">
        <Alert msg={"No Compaign found, please create a compaign"}/>
            <Row/>
        </div>
    )
}
export default Compaign
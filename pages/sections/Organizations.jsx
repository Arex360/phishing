import Card from "../components/Card"
import { faHome, faPlus} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import TextField from "../components/TextField"
import Tile from "../components/Tile"
import Dashboard from "../components/Dashboard"
import Nav from "../components/Nav"
import MaterialButton from "../components/MaterialButton"
import { FaSearch } from "react-icons/fa"
let Organization = ({user, firebase, tileClick,auth,signout})=>{
    let [createOrganization,setCreateOrganization] = useState(false)
    let [showOrganizations,setShowOrganizations] = useState(false)
    let [showMenu,setShowMenu] = useState(true)
    let [isOrgSelected,setIsOrgSelected] = useState(false)
    let [selectedOrg,setSelectedOrg] = useState('')
    let [organizationName,setOrganizationName] = useState('')
    let [Tiles,setTiles] = useState([])
    let disableAll =()=>{
        setCreateOrganization(false)
        setShowOrganizations(false)
        setShowMenu(false)
    }
    let showCreateOganizationPanel = ()=>{
        disableAll()
        setCreateOrganization(true)
    }
    let showMyOrganizations = ()=>{
        disableAll()
        setShowOrganizations(true)
    }
    let PushOrganization = ()=>{
        let s = user.email
        let i = s.indexOf("@")
        s = s.substring(0,i)
        let ref = firebase.database().ref('/'+s+'/'+organizationName)
        let org = {
            name: organizationName,
            isOwner: true
        }
        ref.set(org)
        alert(`created Organization: ${organizationName}`)
        window.location.reload()
    }
    let TileClickHandler = (e)=>{
        setSelectedOrg(e)
        setIsOrgSelected(true)
        alert(organizationName)
    }
    let getOrg = ()=>{
        let s = user.email
        let i = s.indexOf("@")
        s = s.substring(0,i)
        let ref = firebase.database().ref('/'+s+'/'+organizationName)
        ref.once('value',snapshot=>{
            snapshot = snapshot.val()
            let newTiles = []
            for(let key in snapshot){
                console.log(key)
                newTiles.push(<Tile onClick={()=>TileClickHandler(key)} title={key}/>)
            }
            setTiles(newTiles)
        })
    }
    useEffect(()=>{
        getOrg()
    },[])
    return(
        <div className="div orgs block w-full absolute top-0">    
           
            {!isOrgSelected &&<div className="detail w-full absolute top-20 flex justify-between px-11 items-center">
                <div className="left"><h1 className="text-3xl font-semibold">Project</h1></div>
                <div className="right flex gap-1">
                <div className="input flex items-center p-1 gap-2 border-solid border-2 border-x-gray-300">
                 <FaSearch/>
                 <input onChange={(e)=>setOrganizationName(e.target.value)} className="outline-none" type="text" placeholder="Create Organization" />
               </div>
              <button onClick={PushOrganization} className="bg-slate-800 text-white rounded-md py-2 px-3">Create Organization</button>
                </div>
            </div>}
            {!isOrgSelected &&<div className="detail w-full absolute top-36 flex items-center px-11">
                <div className="right flex gap-1">
                <div className="input flex items-center p-1 gap-2 border-solid border-2 border-x-gray-300">
                 <FaSearch/>
                 <input  className="outline-none" type="text" placeholder="Search Organization" />
               </div>
                </div>
            </div>}
            <div className="organization w-full ">
                {isOrgSelected && <Dashboard fuser={user} firebase={firebase} organization={selectedOrg} auth={auth} signout={signout}/>}
                {!isOrgSelected && <div style={{width:'97%'}} className="mx-auto h-screen  mt-48  p-4">
                    {Tiles}
                    </div>}
            </div>
        </div>
    )
}
export default Organization
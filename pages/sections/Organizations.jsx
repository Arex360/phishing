import Card from "../components/Card"
import { faHome, faPlus} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import TextField from "../components/TextField"
import Tile from "../components/Tile"
import Dashboard from "../components/Dashboard"
import Nav from "../components/Nav"
import MaterialButton from "../components/MaterialButton"
let Organization = ({user, firebase, tileClick})=>{
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
        alert('created Organization')
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
        <div className="div orgs">
            <Nav createOrganization={PushOrganization} onSetOrganizationName={e=>setOrganizationName(e.target.value)}/>
        <div className="organization w-full h-screen flex justify-evenly items-center">
            {showMenu && false && <Card icon={faHome} title="My Organizations" onClick={showMyOrganizations}/>}
            {showMenu && false && <Card icon={faPlus} title="Create Organization" onClick={showCreateOganizationPanel}/>}
            {isOrgSelected && <Dashboard fuser={user} firebase={firebase} organization={selectedOrg}/>}
            {createOrganization && <div>
                <div className="org flex" id="test">
                <input onChange={e=>setOrganizationName(e.target.value)} placeholder="Enter Organization Name" className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autoFocus/>
                <button onClick={PushOrganization} className="w-1/3 text-white bg-gray-900">Create Organization</button>
                 </div>
                </div>}
            {!isOrgSelected && <div className="w-full h-screen  mt-28  p-4">
                {Tiles}
                </div>}
        </div>
        </div>
    )
}
export default Organization
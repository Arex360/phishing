import {useState,useEffect} from 'react'
import MaterialButton from '../components/MaterialButton'
import TextField from '../components/TextField'
import * as $ from 'jquery'
import Table from './Table'
import TableRow from '../components/TableRow'
let UserGroup = ({user,firebase,organizationName})=>{
    let [users,setUsersSelected] = useState(false)
    let [create,setCreateUsers] = useState(false)
    let [tables,setTable] = useState([])
    let [userData,setUserData] = useState({
        username: '',
        role: '',
        email: '',
        admin: false
    })
    let Reset = ()=>{
        setUsersSelected(false)
        setCreateUsers(false)
    } 
    let showUsersSection =()=>{
        Reset()
        setUsersSelected(true)
    }
    let showCreateUser = ()=>{
        Reset()
        setCreateUsers(true)
    }
    let getAllInputs = ()=>{
        let s = user.email
        let i = s.indexOf("@")
        s = s.substring(0,i)
        let ref = firebase.database().ref('/'+s+'/'+organizationName+'/org/'+userData.username)
       ref.set(userData)
       alert('uploaded')
    }
    let getUsersfromFireBase=()=>{
        let s = user.email
        let i = s.indexOf("@")
        s = s.substring(0,i)
        let ref = firebase.database().ref('/'+s+'/'+organizationName+'/org/')
        ref.on('value',snapshot=>{
            snapshot = snapshot.val()
            let t = []
            for(var key in snapshot){
                let tmp = snapshot[key]
                t.push(<TableRow username={tmp.username} email={tmp.email} admin={tmp.admin} role={tmp.role}/>)
                console.log(snapshot[key])
            }
            setTable(t)
        })
    }
    useEffect(()=>{
        getUsersfromFireBase()
    },[])
    return (
        <div className="user w-full  h-screen">
            <div className="options w-1/2 h-20 bg-slate-600 m-auto rounded-lg flex">
                <div onClick={showUsersSection} className={`btn w-1/2 hover:bg-slate-800 h-100 flex justify-center items-center text-white ${users ? 'bg-slate-800': ''}`}>Users</div>
                <div onClick={showCreateUser} className={`btn w-1/2 hover:bg-slate-800 h-100 flex justify-center items-center text-white ${create ? 'bg-slate-800': ''}`}>Create User</div>
            </div>
            {create && <div className='m-auto w-4/5 bg-slate-50 h-screen my-5 rounded-3xl p-10'>
                <div className="flex w-full items-center my-6">
                    <label htmlFor="">User Name:</label>
                    <input onChange={e=>{
                        setUserData({
                            ...userData,
                            username: e.target.value
                        })
                    }} placeholder="Enter Username" className="u input mx-10 w-1/3 border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autoFocus/> 
                </div>
                <div className="flex w-full items-center my-6">
                    <label htmlFor="">User email:</label>
                    <input onChange={e=>{
                        setUserData({
                            ...userData,
                            email: e.target.value
                        })
                    }} placeholder="Enter email" className="e input mx-10 w-1/3 border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autoFocus/> 
                </div>
                <div className="flex w-full items-center my-6">
                    <label htmlFor="">User Role:</label>
                    <input onChange={e=>{
                        setUserData({
                            ...userData,
                            role: e.target.value
                        })
                    }} placeholder="Enter User Role" className="r input mx-10 w-1/3 border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autoFocus/> 
                </div>
                <div className="flex w-full items-center my-6">
                    <label htmlFor="">Admin:</label>
                    <input onChange={e=> {
                        setUserData({
                            ...userData,
                            admin: e.target.checked
                        })
                    }} type="checkbox" className='a w-8 h-8 mx-14'/>
                </div>
                <MaterialButton title={"Submit"} onClick={getAllInputs}/>
            
            
            </div> }
            {!create && <div className='mx-48 my-32'>
                <Table tables={tables}/>
                </div>}
        </div>
    )
}

export default UserGroup
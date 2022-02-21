import { useState ,useEffect} from "react"
import MaterialButton from "../components/MaterialButton"
import TextArea from "../components/TextArea"
import firebase from 'firebase/compat/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import { getAuth, signOut} from "firebase/auth";
import frontImg from './front.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
let Userpanel = ()=>{
    let [accounts,setAccounts] = useState([])
    useEffect(()=>{
        let account = [
            <UserItem name={"Ahsan"} email={"mhasan.ch786@gmail.com"} group={"test group"} role={"ceo"}/>,
            <UserItem name={"Ahsan"} email={"mhasan.ch786@gmail.com"} group={"test group"} role={"ceo"}/>,
            <UserItem name={"Ahsan"} email={"mhasan.ch786@gmail.com"} group={"test group"} role={"ceo"}/>,
            <UserItem name={"Ahsan"} email={"mhasan.ch786@gmail.com"} group={"test group"} role={"ceo"}/>
        ]
        setAccounts(account)
    },[])
    return(
        <section className="text-gray-600 body-font h-screen overflow-scroll py-14">
            <div className="row1 w-full bg-slate-200 shadow-md  p-5 mb-2">
                <h1 className="text-3xl font-bold">PhishNode Users</h1>
                <hr />  
            </div>
            <div className="row2 bg-slate-100 w-full flex justify-end px-11 gap-5 p-3">
                <h1>Azure user id</h1>
                <h1>Active directory users</h1>
            </div>
            <div className="row3 flex w-full p-5 bg-slate-200 shadow-md items-center justify-between">
                <div className="left  flex items-center gap-2 ">
                    <div className="input flex items-center gap-2 px-2 border-2 border-solid border-slate-400 bg-white ">
                        <input type="text" placeholder="Search" className="outline-none px-2"/>
                        <AiOutlineSearch />
                    </div>
                    <select className="w-52 p-1">
                        <option>Admin Users</option>
                        <option>Active Directory Users</option>
                    </select>
                </div>
                <div className="right flex items-center gap-2">
                    <select className="w-20 p-1">
                        <option>Add</option>
                        <option>Active Directory Users</option>
                    </select>
                    <button className="bg-gray-500 text-white p-1 px-6">Edit</button>
                    <button className="bg-red-600 text-white p-1 px-5">Delete</button>
                </div>
            </div>
            <div className="row4 w-full gap-2">
                <table className="w-full text-white">
                    <tr className="border-r-8 border-solid border-x-slate-100">
                       <td className="bg-slate-600 hover:bg-slate-800 duration-300 p-2"><input type="checkbox" name="" id="" /></td>
                       <td className="bg-slate-600 hover:bg-slate-800 duration-300">Name</td>
                       <td className="bg-slate-600 hover:bg-slate-800 duration-300">Email</td>
                       <td className="bg-slate-600 hover:bg-slate-800 duration-300">Groups</td>
                       <td className="bg-slate-600 hover:bg-slate-800 duration-300">Roles</td> 
                    </tr>
                    {accounts   }
                </table>
            </div>
        </section>
    )
}
let UserItem = ({name,email,group,role})=>{
    return(
        <tr className="text-slate-600 border-b-[1px] border-solid border-x-slate-900">
                        <td className="p-2"><input type="checkbox" name="" id="" /></td>
                        <td className="flex items-center gap-2 mt-2">
                            <FaUser/>
                            <h1>{name}</h1>
                            </td>
                        <td><h6 className=" w-fit m-0">{email}</h6></td>
                        <td><h1 className=" w-fit m-0">{group}</h1></td>
                        <td><h1>{role}</h1></td>
                    </tr>
    )
}
export default Userpanel
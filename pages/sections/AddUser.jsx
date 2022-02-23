import { useEffect, useState } from "react"
import {FaSearch} from "react-icons/fa"
let AddUser = ()=>{
    let [availbleGroups,setAvailibleGroups] = useState([])
    let [assignedGroups,setAssignedGroups] = useState([])
    let [availbleGroupKeys,setAvailbleGroupKeys] = useState(["Group1","Group2","Group3","Group4"])
    let [assignedGroupKeys,setAssignedGroupKeys] = useState([])
    let [selectedgroup,setSelectedGroups] = useState([])
    let [form ,setForm] = useState(false)
    let PopulateAvailbleGroups = ()=>{
        let groups = []
        availbleGroupKeys.forEach(key=>{
            groups.push(<GroupCard onClick={()=>{
                selectedgroup.push(key)
                setSelectedGroups(selectedgroup)
            }} title={key} />)
        })
        setAvailibleGroups(groups)
    }
    let PopulateAssignedGroups = ()=>{
        let groups = []
        assignedGroupKeys.forEach(key=>{
            groups.push(<GroupCard title={key}/>)
        })
        setAssignedGroups(groups)
    }
    let uncheckAll= ()=>{
        let checkboxes = document.querySelectorAll("input[type=checkbox]")
        checkboxes.forEach(box=>{
            box.checked = false
        })
    }
    let AssignGroup = ()=>{
        let groups = assignedGroupKeys
        console.log(groups)
        selectedgroup.forEach(g=>{
            let fGroup = availbleGroupKeys.filter(n=> n == g)
            fGroup.forEach(key=>{
            groups.push(key)
            })
        })
        selectedgroup.forEach(g=>{
            availbleGroupKeys = availbleGroupKeys.filter(n => n != g)
        })
        setAvailbleGroupKeys(availbleGroupKeys)
        setAssignedGroupKeys(groups)
        console.log(assignedGroupKeys)
        PopulateAvailbleGroups()
        PopulateAssignedGroups()
        uncheckAll()
    }
    useEffect(()=>{
        PopulateAvailbleGroups()
    },[])
    return(
        <section className="text-gray-600 body-font h-screen overflow-scroll py-14">
            { form && <div className="card absolute flex flex-col gap-4 bg-slate-100 w-1/2 h-[50vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl">
                <div className="row flex center text-2xl mt-3">
                     <h1 className="mx-auto">Import users from CSV</h1>
                </div>
                <div className="line w-full h-[0.5px] bg-gray-400"></div>
                <div className="body w-11/12  mx-auto flex">
                    <div className="left w-1/2 text-justify">
                        {`The csv imports new users requires settings of "name" and email", As optional fields you can add "manager email"
                        "exchange login" and groups'`}
                        <br />
                        {`If you have users who are in several groups you can add additional "group fields" allowed by a number , For example ,"group 1" and "group 2"`}
                        <br />
                        As a formating example you can have a look at following examples
                        <ul className="ml-10 mt-5">
                            <li className="list-disc"><a href="" className="text-blue-600">Blank template with header</a></li>
                            <li className="list-disc"><a href="" className="text-blue-600">Template with example data</a></li>
                        </ul>
                    </div>
                    <div className="mid"></div>
                    <div className="right flex flex-col gap-2 w-1/2 p-4 border-l-[0.2px] ml-5 border-solid border-slate-500">
                        <h1>CSV File <b className="text-red-600 text-2xl">{"*"}</b></h1>
                        <input type="file" className="w-full border-2 border-solid border-slate-500" />
                        <div className="options flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <h2>Create new groups</h2>
                        </div>
                        <div className="options flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <h2>Give users access to login</h2>
                        </div>
                        <h1 className="font-bold">Max file size is 2MB <br />
                        CSV file should be utf-8 encoded
                        </h1>
                    </div>
                </div>
                <div className="line w-full h-[0.5px] bg-gray-400"></div>
                <div className="footer flex items-center justify-end gap-4 w-11/12">
                    <button>Cancel</button>
                    <button className="bg-blue-500 text-white px-10 py-1">Add</button>
                </div>
            </div>}
            <div className="row1 w-full bg-slate-200 shadow-md  p-5 mb-2">
                <h1 className="text-3xl font-bold">PhishNode: Add Users</h1>
                <hr />  
            </div>
            <div className="row1 w-full flex justify-center mt-3 flex-col gap-3">
                <label className="mx-auto text-2xl">Add User</label>
                <div className="line w-full h-1 bg-slate-600 scale-y-[0.2]"></div>
            </div>
            <div className="body w-full flex justify-center items-center flex-col gap-3 mt-5">
                <div className="form w-11/12 flex flex-col gap-3">
                    <div className="r1 flex justify-between">
                        <div className="field1 flex w-2/3  flex-col gap-1">
                            <label htmlFor="">{"First & last name"}</label>
                            <input placeholder={"First name & last name"} type="text" className="px-2 border-solid border-2 w-11/12 border-slate-400 outline-none" />
                        </div>
                        <div className="field1 flex w-2/3 flex-col gap-1">
                            <label htmlFor="">Email Address</label>
                            <input placeholder="name@email.com" type="text" className="px-2 border-solid border-2 border-slate-400 outline-none" />
                        </div>
                    </div>
                    <div className="r2">
                        <div className="field1 flex w-2/3  flex-col gap-1">
                            <label htmlFor="">Role</label>
                            <select className="border-solid border-2 border-slate-400 outline-none w-1/3">
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <h1 className="text-blue-600 cursor-pointer" onClick={()=>setForm(true)}>import user through csv</h1>
                    <div className="r3 flex justify-between w-full items-center gap-4">
                        <div className="left flex flex-col w-3/5 ">
                            <label>Availible Groups</label>
                            <div className="groupbox border-solid border-2 border-slate-400 w-4/4 min-h-[40vh]">
                                    <div className="groupnav bg-gray-300 w-full flex flex-col p-3 gap-1">
                                            <div className="input flex justify-between w-full bg-white items-center px-3 border-solid border-2 border-slate-400">
                                                <input type="text" className="w-11/12 bg-none outline-none" placeholder="Search..."/>
                                                <div className="search text-blue-500 text-sm">
                                                    <FaSearch/>
                                                </div>
                                            </div>
                                            <div className="menu flex justify-between items-center">
                                                <div className="title flex items-center gap-2">
                                                    <input type="checkbox"/>
                                                    <label>Availible Groups</label>
                                                </div>
                                                <label>0</label>
                                            </div>
                                    </div>
                                    {availbleGroups}
                            </div>
                           
                        </div>
                        <div className="mid flex flex-col gap-2">
                            <button onClick={()=>AssignGroup()} className="bg-slate-500 hover:bg-slate-900 duration-300 text-white py-2 px-5">{">"}</button>
                            <button className="bg-slate-500 text-white py-2 px-5 hover:bg-slate-900 duration-300">{"<"}</button>
                        </div>
                        <div className="right flex flex-col w-3/5 ">
                        <label>Assigned Groups</label>
                        <div className="groupbox border-solid border-2 border-slate-400 w-4/4 min-h-[40vh]">
                                    <div className="groupnav bg-gray-300 w-full flex flex-col p-3 gap-1">
                                            <div className="input flex justify-between w-full bg-white items-center px-3 border-solid border-2 border-slate-400">
                                                <input type="text" className="w-11/12 bg-none outline-none" placeholder="Search..."/>
                                                <div className="search text-blue-500 text-sm">
                                                    <FaSearch/>
                                                </div>
                                            </div>
                                            <div className="menu flex justify-between items-center">
                                                <div className="title flex items-center gap-2">
                                                    <input type="checkbox"/>
                                                    <label>Assigned Groups</label>
                                                </div>
                                                <label>0</label>
                                            </div>
                                    </div>
                                    {assignedGroups}
                            </div>

                        </div>
                    </div>
                    <div className="r4 mt-10 flex flex-col gap-5">
                        <div className="line w-full h-[0.8px] bg-slate-300"></div>
                        <div className="submit w-full flex items-center justify-end gap-4">
                            <button className="text-blue-500 font-bold">Cancel</button>
                            <button className="bg-blue-500 text-white px-5 shadow-xl py-1 rounded-md    ">Save and Add Another</button>
                            <button className="bg-blue-500 text-white px-5 shadow-xl py-1 rounded-md">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
let GroupCard = ({title,onClick})=>{
    let [selected,setSelected] = useState(false)
    let clickHandler = ()=>{
        onClick()
    }
     return(
       <div className={"card bg-slate-200 flex items-center gap-2 group hover:bg-gray-800"}>
           <input onClick={clickHandler} type="checkbox" className="cursor-pointer" id="" />
           <h1 className="group-hover:text-white">{title}</h1>
       </div>
    )
}
export default AddUser
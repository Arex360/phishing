import {FaSearch} from 'react-icons/fa'
let AddUser = ()=>{
    return(
        <section className="text-gray-600 body-font h-screen overflow-scroll py-14">
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
                            <label htmlFor="">First & last name</label>
                            <input placeholder="First name & last name" type="text" className="px-2 border-solid border-2 w-11/12 border-slate-400 outline-none" />
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
                    <div className="r3 flex justify-between w-full items-center gap-4">
                        <div className="left flex flex-col w-3/5 ">
                            <label>Availible Groups</label>
                            <div className="groupbox border-solid border-2 border-slate-400 w-4/4 min-h-[40vh]">
                                    <div className="groupnav bg-gray-300 w-full flex flex-col p-3 gap-1">
                                            <div className="input flex justify-between w-full bg-white items-center px-3 border-solid border-2 border-slate-400">
                                                <input type="text" className="w-11/12 bg-none outline-none" placeholder='Search...'/>
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
                            </div>
                        </div>
                        <div className="mid flex flex-col gap-2">
                            <button className="bg-slate-500 text-white py-2 px-5">{`>`}</button>
                            <button className="bg-slate-500 text-white py-2 px-5">{`<`}</button>
                        </div>
                        <div className="right flex flex-col w-3/5 ">
                        <label>Assigned Groups</label>
                        <div className="groupbox border-solid border-2 border-slate-400 w-4/4 min-h-[40vh]">
                                    <div className="groupnav bg-gray-300 w-full flex flex-col p-3 gap-1">
                                            <div className="input flex justify-between w-full bg-white items-center px-3 border-solid border-2 border-slate-400">
                                                <input type="text" className="w-11/12 bg-none outline-none" placeholder='Search...'/>
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
                            </div>

                        </div>
                    </div>
                    <div className="r4 mt-10 flex flex-col gap-5">
                        <div className="line w-full h-[0.8px] bg-slate-300"></div>
                        <div className="submit w-full flex items-center justify-end gap-4">
                            <button className='text-blue-500 font-bold'>Cancel</button>
                            <button className='bg-blue-500 text-white px-5 shadow-xl py-1 rounded-md    '>Save and Add Another</button>
                            <button className='bg-blue-500 text-white px-5 shadow-xl py-1 rounded-md'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AddUser
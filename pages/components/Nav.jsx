import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
let Nav = ({createOrganization,onSetOrganizationName})=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="md:flex justify-between items-center bg-slate-50 w-full md:h-14 lg:shadow-md p-4 sm:block">
      <div className="left flex items-center gap-2">
        <div className="grid grid-cols-3 gap-1 scale-75">
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          <div className="dot w-2 h-2 bg-slate-600"></div>
          
        
        </div>
        <h1>Company Name</h1>
      </div>
      <div className="right flex items-center gap-2">
        <div className="input flex items-center p-1 gap-2 border-solid border-2 border-x-gray-300">
          <FaSearch/>
          <input onChange={onSetOrganizationName} className="outline-none" type="text" placeholder="Create Organization" />
        </div>
        <button onClick={createOrganization} className="bg-slate-800 text-white rounded-md py-2 px-3">Create Organization</button>
      </div>
    </nav>
  );
};
export default Nav
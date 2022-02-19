import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
let Nav = ({createOrganization,onSetOrganizationName, active})=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="md:flex justify-between items-center bg-slate-50 w-full md:h-14 lg:shadow-md p-4 sm:block block relative z-40">
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
        
      </div>
    </nav>
  );
};
export default Nav
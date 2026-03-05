import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import type { ROLES } from '../lib/roles';
import { useRole } from "../hooks/useRole";



function MainLayOut() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
   const {role,isLoading} = useRole()
  //  console.log("roleeeeeeeeeeeeeeeee=>",role)
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="flex flex-col justify-center">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={role as keyof typeof ROLES} />
      <Sidebar role={role as keyof typeof ROLES} sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default MainLayOut;

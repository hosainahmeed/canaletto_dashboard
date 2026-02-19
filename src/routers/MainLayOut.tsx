import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import type { ROLES } from '../lib/roles';

// interface User {
//   name: string;
//   avatar: string;
//   role: Role;
//   isLoggedIn: boolean;
//   email?: string;
// }

function MainLayOut() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  // const navigate = useNavigate()
  // const [loading, setLoading] = useState<boolean>(false)
  // const [user, setUser] = useState<User | null>(null)

  // useEffect(() => {
  //   const load = async () => {
  //     setLoading(true)

  //     try {
  //       // Safely get user from localStorage
  //       const userData = getUserFromLocalStorage()

  //       if (!userData || !userData.isLoggedIn) {
  //         await new Promise(resolve => setTimeout(resolve, 1000))
  //         navigate("/login")
  //         return
  //       }

  //       setUser(userData)

  //       // Navigate to appropriate dashboard based on role
  //       await new Promise(resolve => setTimeout(resolve, 1000))
  //       switch (userData.role) {
  //         case ROLES.ADMIN:
  //           navigate("/admin/dashboard")
  //           break
  //         case ROLES.PROPERTY_ADMIN:
  //           navigate("/property-admin/dashboard")
  //           break
  //         case ROLES.CONTENT_ADMIN:
  //           navigate("/content-manager/dashboard")
  //           break
  //         case ROLES.SUPPORT_MEMBER:
  //           navigate("/support/dashboard")
  //           break
  //         default:
  //           navigate("/login")
  //           break
  //       }
  //     } catch (error) {
  //       console.error('Error loading user data:', error)
  //       // navigate("/login")
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   load()
  // }, [navigate])

  // if (loading) {
  //   return <div className="fixed top-0 left-0 w-full h-full z-999 flex items-center justify-center">
  //     <Loader className="animate-spin" />
  //   </div>
  // }

  // if (!user) {
  //   return null // Will redirect to login in useEffect
  // }

  return (
    <div className="flex flex-col justify-center">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={"admin" as keyof typeof ROLES} />
      <Sidebar role={"admin" as keyof typeof ROLES} sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default MainLayOut;

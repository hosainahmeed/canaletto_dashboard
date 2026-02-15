import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ROLES, type Role } from "../lib/roles";
function MainLayOut() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const user = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    role: "content_admin" as Role,
    isLoggedIn: true,
  }
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      if (!user.isLoggedIn) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        navigate("/login")
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000))
        switch (user.role) {
          case ROLES.ADMIN:
            navigate("/admin/dashboard")
            break
          case ROLES.PROPERTY_ADMIN:
            navigate("/property-manager/dashboard")
            break
          case ROLES.CONTENT_ADMIN:
            navigate("/content-manager/dashboard")
            break
          case ROLES.SUPPORT_MEMBER:
            navigate("/support-manager/dashboard")
            break
          default:
            navigate("/login")
            break
        }

      }
      setLoading(false)
    }
    load()
  }, [user.isLoggedIn, navigate, user.role])

  if (loading) {
    return <div className="fixed top-0 left-0 w-full h-full z-999 flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  }
  return (
    <div className="flex flex-col justify-center">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={user.role} />
      <Sidebar role={user.role} sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default MainLayOut;

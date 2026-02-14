import { LogOut } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import { cn } from '../lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { SidebarLeft01Icon} from '@hugeicons/core-free-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { MENU } from './menu'

function Sidebar({sidebarOpen, role}: {sidebarOpen: boolean, role: string}) {
const menuItems = MENU[role as keyof typeof MENU]
    const location = useLocation()
    const navigate = useNavigate()
//   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})


//       const toggleExpanded = (title: string) => {
//     setExpandedItems((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }))
//   }
  return (
          <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-linear-gradient-to-br from-[#D4B785] to-blue-600 text-white">
                <HugeiconsIcon icon={SidebarLeft01Icon} />
              </div>
              <div>
                <h2 className="font-semibold">Designali</h2>
                <p className="text-xs text-muted-foreground">Creative Suite</p>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {menuItems?.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
                      location.pathname.includes(item.path) ? "bg-linear-to-br from-[#D4B785] text-white to-[#B08D59]" : "hover:bg-muted",
                    )}
                    onClick={() => navigate(item.path)} // onClick={() => toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar
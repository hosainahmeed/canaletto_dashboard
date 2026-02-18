
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '../../../lib/utils'
import { Search01Icon } from '@hugeicons/core-free-icons'

const chatUsers = [
  { id: 1, name: "Rakib Hasan", msg: "Hi, I would like to check the pay...", time: "25 min ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakib", unread: 0 },
  { id: 2, name: "Emma Wilson", msg: "Hi, I would like to check the pay...", time: "25 min ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", unread: 2 },
  { id: 3, name: "Chris Brown", msg: "Hi, I would like to check the pay...", time: "25 min ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris", unread: 0 },
  { id: 4, name: "Chris Brown", msg: "Hi, I would like to check the pay...", time: "25 min ago", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane", unread: 0 },
]

export const ChatSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Search by name" 
            className="w-full pl-4 pr-10 py-2.5 border rounded-lg text-sm outline-none bg-white"
          />
        </div>
        <button className="p-2.5 bg-[#D4B98E] text-white rounded-lg hover:bg-[#bfa57a] transition-colors">
          {/* <Search01Icon size={20} /> */}
          <HugeiconsIcon icon={Search01Icon} />
        </button>
      </div>

      {/* User List */}
      <div className="flex flex-col gap-3">
        {chatUsers.map((user) => (
          <div 
            key={user.id} 
            className={cn(
              "flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all hover:bg-zinc-50",
              user.id === 1 ? "border-[#D4B98E] bg-orange-50/30" : "border-zinc-100 bg-white"
            )}
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden border bg-zinc-100 flex-shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold italic text-zinc-700 truncate">{user.name}</h4>
                <span className="text-[10px] text-zinc-400 font-medium">{user.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-zinc-400 truncate pr-2">{user.msg}</p>
                {user.unread > 0 && (
                  <span className="w-4 h-4 bg-[#D4B98E] text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                    {user.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
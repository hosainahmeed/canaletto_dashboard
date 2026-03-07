import { UserAccountIcon, CircleIcon, UnavailableIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '../../../components/ui/button'
import TakeConfirm from '../../../components/ui/take-confirm'
import TableUserInfo from '../../../components/shared/TableUserInfo'
import { cn } from '../../../lib/utils'

export const clientColumns = (renderRouting: (id: string) => void) => [
  {
    id: 'name',
    header: 'User Name',
    accessorKey: 'name',
    cell: ({ row }: any) => (
      <TableUserInfo
        name={row.original.name}
        img={row.original.profile_image} 
      />
    ),
  },
  {
    id: 'email',
    header: 'Email',
    accessorKey: 'email',
  },
  {
    id: 'phone',
    header: 'Phone',
    accessorKey: 'phone',
  },
  {
    id: 'property',
    header: 'Assigned Property',
    cell: ({ row }: any) => {
        return row.original.manager?.name || "Not Assigned"
    }
  },
  {
    id: 'joinedOn',
    header: 'Joined On',
    accessorKey: 'joinedOn',
    cell: ({ row }: any) => {
      if (!row.original.joinedOn) return "N/A";
      return new Date(row.original.joinedOn).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })
    }
  },
  {
    id: 'status',
    header: 'Status',
    cell: ({ row }: any) => {
      const isActive = row.original.user?.isActive;
      
      return (
        <div className="flex items-center gap-2">
             <span className={cn(
            "px-2 py-1 rounded-md text-xs font-semibold",
            isActive ? "text-green-500" : "text-red-500"
          )}>
            {isActive ? "Active" : "Blocked"}
          </span>
          </div>
      )
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }: any) => {
      const { id } = row.original
      const isActive = row.original.user?.isActive

      return (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => renderRouting(id)}
            size="sm"
            variant="outline"
          >
            <HugeiconsIcon icon={UserAccountIcon} />
          </Button>
          <TakeConfirm
            title={isActive ? "Block this Client?" : "Unblock this Client?"}
            description={`Are you sure you want to ${isActive ? 'block' : 'unblock'} this user?`}
            confirmText="Confirm"
            cancelText="Cancel"
            onConfirm={() => console.log("Toggle Status for:", id)}
          >
            <Button size="sm" variant="outline">
              <HugeiconsIcon
                icon={isActive ? CircleIcon : UnavailableIcon}
                className={isActive ? "text-gray-500" : "text-red-500"}
              />
            </Button>
          </TakeConfirm>
        </div>
      )
    },
  },
]
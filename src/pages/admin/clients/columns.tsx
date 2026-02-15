import { UserSettings01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import TableUserInfo from '../../../components/shared/TableUserInfo'
import IconWrapper from '../../../components/shared/cards/IconWrapper'
import { cn } from '../../../lib/utils'

export type Client = {
  id: string
  name: string
  email: string
  phone: string
  assignedProperty: string
  joinedOn: string
  status: "Active" | "Blocked",
  img: string
}

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "User Name",
    cell: ({ row }) => (
      <div className="font-medium">
        <TableUserInfo name={row.getValue("name")} img={row.original.img} />
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "assignedProperty",
    header: "Assigned Property",
  },
  {
    accessorKey: "joinedOn",
    header: "Joined On",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={cn("font-normal", row.getValue("status") === "Active" ? "text-green-500" : "text-red-500")}>
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => (
      <IconWrapper className='border w-fit p-2 hover:bg-brand/20'>
        <HugeiconsIcon size={16} icon={UserSettings01Icon} />
      </IconWrapper>
    ),
  },
]
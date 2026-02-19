import { CircleIcon, UnavailableIcon, UserAccountIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import DynamicTable from '../../components/shared/DynamicTable'
import TableUserInfo from '../../components/shared/TableUserInfo'
import { Button } from '../../components/ui/button'
import { cn } from '../../lib/utils'

type Client = {
  id: string
  img: string
  name: string
  email: string
  phone: string
  property: string
  joinedOn: string
  status: 'Active' | 'Blocked'
}

function RecentlyAddedClients() {
  const data: Client[] = [
    {
      id: '1',
      img: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: 'Emma Wilson',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      property: 'Canaletto Sky World',
      joinedOn: 'Jul 10, 2025',
      status: 'Active',
    },
    {
      id: '2',
      img: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: 'Chris Brown',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      property: 'Canaletto Sky World',
      joinedOn: 'Jul 10, 2025',
      status: 'Active',
    },
    {
      id: '3',
      img: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: 'Chris Brown',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      property: 'Canaletto Sky World',
      joinedOn: 'Jul 10, 2025',
      status: 'Blocked',
    },
  ]

  const columns = [
    {
      id: 'name',
      header: 'User Name',
      accessorKey: 'name',
      cell: ({ row }: any) => (
        <TableUserInfo
          name={row.original.name}
          img={row.original.img}
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
      accessorKey: 'property',
    },
    {
      id: 'joinedOn',
      header: 'Joined On',
      accessorKey: 'joinedOn',
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      cell: ({ row }: any) => {
        const status = row.original.status
        const isActive = status === 'Active'

        return (
          <div
            className={cn("px-3 py-1 rounded-full text-xs font-medium w-fit", {
              "text-green-600": isActive,
              "text-red-600": !isActive
            })}
          >
            {status}
          </div>
        )
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }: any) => {
        const { id, status } = row.original
        const isActive = status === 'Active'

        return (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => console.log(id, 'View clicked')}
              size="sm"
              variant="outline"
            >
              <HugeiconsIcon icon={UserAccountIcon} />
            </Button>

            <Button
              onClick={() => console.log(id, 'Toggle clicked')}
              size="sm"
              variant="outline"
            >
              <HugeiconsIcon
                icon={isActive ? CircleIcon : UnavailableIcon}
              />
            </Button>
          </div>
        )
      },
    },
  ]

  return <DynamicTable data={data} columns={columns} />
}

export default RecentlyAddedClients
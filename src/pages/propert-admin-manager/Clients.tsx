import { AddSquareIcon, CircleIcon, UnavailableIcon, UserAccountIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router-dom'
import DynamicTable from '../../components/shared/DynamicTable'
import { PageLayout } from '../../components/shared/PageLayout'
import TableUserInfo from '../../components/shared/TableUserInfo'
import { Button } from '../../components/ui/button'
import { ButtonGroup } from '../../components/ui/button-group'
import { Field } from '../../components/ui/field'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import TakeConfirm from '../../components/ui/take-confirm'
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

function Clients() {
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
            <TakeConfirm
              title={isActive ? "Deactivate property?" : "Activate property?"}
              description="This action will change the visibility of this property."
              confirmText="Yes, confirm"
              cancelText="No"
              onConfirm={() => console.log(id, "Toggle clicked")}
            >
              <Button
                size="sm"
                variant="outline"
              >
                <HugeiconsIcon
                  icon={isActive ? CircleIcon : UnavailableIcon}
                />
              </Button>
            </TakeConfirm>
          </div>
        )
      },
    },
  ]
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const renderAction = () => {
    return (
      <div className='flex gap-2'>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="active">Active Users</SelectItem>
              <SelectItem value="blocked">Blocked Users</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Field>
          <ButtonGroup>
            <Input onChange={handleSearch} className='h-9 focus:outline-none! focus:ring-0!' id="input-button-group" placeholder="Type to search..." />
            <Button size='default' className="h-9" variant="outline">Search</Button>
          </ButtonGroup>
        </Field>
        <Link to="/property-admin/add-client">
          <Button size='sm' className='bg-brand hover:bg-brand/90' ><HugeiconsIcon icon={AddSquareIcon} /> Add Client</Button>
        </Link>
      </div>
    )
  }
  return (
    <PageLayout title="Manage Clients" action={renderAction()}>
      <DynamicTable data={data} columns={columns} />
    </PageLayout>
  )
}

export default Clients
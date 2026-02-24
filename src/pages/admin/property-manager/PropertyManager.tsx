
import { AddSquareIcon, CircleIcon, City01Icon, UnavailableIcon, UserAccountIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useNavigate } from 'react-router-dom'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import TakeConfirm from '../../../components/ui/take-confirm'
import { cn } from '../../../lib/utils'


const PropertyManager = () => {
  const navigate = useNavigate()
  const column = [
    {
      header: 'Manager Name',
      accessorKey: 'managerName',
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <img src={row.original.managerImage} alt={row.original.managerName} className="w-8 h-8 rounded-full" />
          {row.original.managerName}
        </div>
      ),
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Phone',
      accessorKey: 'phone',
    },
    {
      header: 'Assigned On',
      accessorKey: 'assignedOn',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <span className={cn("px-2 py-1 rounded-md text-xs", row.original.status === 'Active' ? ' text-green-500' : ' text-red-500')}>
            {row.original.status}
          </span>
        </div>
      ),
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigate(`/admin/property-manager/${row?.original.id}`)}
            size="sm" variant="outline"><HugeiconsIcon icon={UserAccountIcon} /></Button>
          <TakeConfirm
            title={`Are you sure you want to ${row?.original?.status === 'Active' ? 'block' : 'unblock'} ${row?.original.managerName}?`}
            description={`This action will ${row?.original?.status === 'Active' ? 'block' : 'unblock'} ${row?.original.managerName}. They will ${row?.original?.status === 'Active' ? 'no longer' : 'be able to'} manage properties.`}
            onConfirm={() => console.log(row?.original.id, 'Block clicked')}
            onCancel={() => console.log(row?.original.id, 'Cancel clicked')}
            confirmText="Continue"
            cancelText="Cancel"
          >
            <Button
              onClick={() => console.log(row?.original.id, 'Delete clicked')}
              size="sm"
              variant="outline"
            >
              <HugeiconsIcon
                icon={
                  row?.original?.status == "Blocked"
                    ? UnavailableIcon
                    : CircleIcon
                }
              />
            </Button>
          </TakeConfirm>
        </div>
      ),
    },
  ]

  const data = [
    {
      managerName: 'Emily Carter',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Robert Davis',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Sophia White',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Ayesha Rahman',
      email: 'rubel.cse@gmail.com',
      phone: '+1 215-555-0773',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Thomas Baker',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Rachel Green',
      email: 'arif.design@gmail.com',
      phone: '+1 213-555-0890',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Karen Thompson',
      email: 'kamrul.tech@gmail.com',
      phone: '+1 206-555-0734',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },
    {
      managerName: 'Michael Smith',
      email: 'shuvo.bd@gmail.com',
      phone: '+1 212-555-0198',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'N/A',
      managerImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    },

  ]
  return (
    <PageLayout title="Property Manager"
      action={
        <Link to={`/admin/property-manager/add`}>
          <Button className='bg-brand text-white' variant="outline">
            <HugeiconsIcon icon={AddSquareIcon} /> Add New Manager</Button></Link>} icon={<HugeiconsIcon icon={City01Icon} />}>
      <PageContent>
        <DynamicTable data={data} columns={column} />
      </PageContent>
    </PageLayout>
  )
}

export default PropertyManager
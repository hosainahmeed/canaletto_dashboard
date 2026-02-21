import { CircleIcon, UnavailableIcon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import IconWrapper from '../../../components/shared/cards/IconWrapper'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import TakeConfirm from '../../../components/ui/take-confirm'
import { cn } from '../../../lib/utils'

function ContentManager() {
  const columns = [
    {
      header: 'Manager Name',
      accessorKey: 'managerName',
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
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      cell: ({ row }: any) => {
        return (
          <div className='flex gap-2'>
            <IconWrapper className={cn('border border-brand p-2 w-fit h-fit rounded', row?.original?.status === 'Active' ? 'bg-green-50' : 'bg-red-50')}>
              <HugeiconsIcon size={16} icon={UserIcon} />
            </IconWrapper>
            <TakeConfirm
              title="Are you sure you want to change the status?"
              cancelText="Cancel"
              confirmText="Confirm"
              onConfirm={() => console.log('Confirmed')}
            >
              <IconWrapper className={cn('border border-brand p-2 w-fit h-fit rounded', row?.original?.status === 'Active' ? 'bg-green-50' : 'bg-red-50')}>
                <HugeiconsIcon color={row?.original?.status === 'Active' ? 'green' : 'red'} size={16} icon={row.original.status === 'Active' ? CircleIcon : UnavailableIcon} />
              </IconWrapper>
            </TakeConfirm>
          </div>
        )
      }
    },

  ]

  const data = [
    {
      managerName: 'Emily Carter',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'Actions',
    },
    {
      managerName: 'Robert Davis',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'Actions',
    },
    {
      managerName: 'Sophia White',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'Actions',
    },
    {
      managerName: 'Ayesha Rahman',
      email: 'rubel.cse@gmail.com',
      phone: '+1 215-555-0773',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'Actions',
    },
    {
      managerName: 'Thomas Baker',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'Actions',
    },
    {
      managerName: 'Rachel Green',
      email: 'arif.design@gmail.com',
      phone: '+1 213-555-0890',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'Actions',
    },
    {
      managerName: 'Karen Thompson',
      email: 'kamrul.tech@gmail.com',
      phone: '+1 206-555-0734',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'Actions',
    },
    {
      managerName: 'Thomas Baker',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: 'Actions',
    },
    {
      managerName: 'Michael Smith',
      email: 'shuvo.bd@gmail.com',
      phone: '+1 212-555-0198',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: 'Actions',
    },

  ]
  return (
    <PageLayout title="Content Manager">
      <PageContent>
        <DynamicTable
          columns={columns}
          data={data}
        />
      </PageContent>
    </PageLayout>
  )
}

export default ContentManager

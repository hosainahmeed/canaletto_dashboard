import { EyeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import FormalCard from '../../../components/shared/cards/FormalCard'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import Space from '../../../components/shared/Space'
import { Button } from '../../../components/ui/button'
import { cn } from '../../../lib/utils'

interface ClientDetails {
  _id: string
  profileImage: string
  fullName: string
  email: string
  contactPhone: string
  joinedOn: string
  status: string
}

interface AssignedProperty {
  _id: string
  name: string
  type: string
  status: string
  progress: string
  projectImage: string
}

const ClientDetails = () => {
  const navigate = useNavigate()
  const clientDetails: ClientDetails = {
    _id: '1',
    profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    fullName: 'Roberts Junior',
    email: 'robert @canaletto.com',
    contactPhone: '+ 1 919 - 555 -0284',
    joinedOn: 'Jul 10, 2025',
    status: 'Active',
  }

  const assignedPropertiesColumns: ColumnDef<AssignedProperty>[] = [
    {
      id: 'name',
      header: 'Property Name',
      cell: ({ row }: { row: { original: AssignedProperty } }) => {
        return (
          <div className="flex items-center gap-2">
            <img src={row.original.projectImage} alt="Project" className='w-10 h-10 rounded-md' />
            <span>{row.original.name}</span>
          </div>
        )
      },
    },
    {
      id: 'type',
      header: 'Type',
      cell: ({ row }) => row.original.type,
    },
    {
      id: 'status',
      header: 'Status',
      cell: ({ row }) => row.original.status,
    },
    {
      id: 'progress',
      header: 'Progress',
      cell: ({ row }) => row.original.progress,
    },
    {
      id: "action",
      header: 'Action',
      cell: ({ row }) => (
        <Button
          onClick={() => navigate(`/admin/properties/${row.original._id}`)}
          size="sm"
          variant="outline">
          <HugeiconsIcon icon={EyeIcon} />
        </Button>
      ),
    }
  ]

  const assignedProperties = [
    {
      _id: '1',
      name: 'The Wilds',
      type: 'Residential Living',
      status: 'Under Construction',
      progress: '45 %',
      projectImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg"
    },
    {
      _id: '2',
      name: 'The Wilds',
      type: 'Residential Living',
      status: 'Under Construction',
      progress: '45 %',
      projectImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg"
    },
  ]

  return (
    <PageLayout title='Client details '>
      <PageContent>
        <div className="w-32 h-32 mb-4">
          <img src={clientDetails.profileImage} alt="Profile" className='w-full h-full rounded-md' />
        </div>
        <FormalCard header="Personal Information">
          <div className="responsive-grid-2">
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Full Name</h1>
              <h1 className='text-[#666666]'>{clientDetails.fullName}</h1>
            </div>
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Email</h1>
              <h1 className='text-[#666666]'>{clientDetails.email}</h1>
            </div>
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Contact Phone</h1>
              <h1 className='text-[#666666]'>{clientDetails.contactPhone}</h1>
            </div>
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Joined On</h1>
              <h1 className='text-[#666666]'>{clientDetails.joinedOn}</h1>
            </div>
            <div className='text-[#B0B0B0] font-nunito-semibold-italic'>
              <h1>Status</h1>
              <h1 className={cn('font-semibold', clientDetails.status === 'Active' ? 'text-green-600' : 'text-red-600')}>{clientDetails.status}</h1>
            </div>
          </div>
        </FormalCard>
        <Space size={4} />
        <FormalCard header="Assigned Properties">
          <DynamicTable header={false} columns={assignedPropertiesColumns} data={assignedProperties} />
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default ClientDetails
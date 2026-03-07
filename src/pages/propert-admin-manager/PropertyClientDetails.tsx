import { AddSquareFreeIcons, Delete02Icon, EyeIcon, Minus, UserBlock01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import { useNavigate, useParams } from 'react-router-dom'
import FormalCard from '../../components/shared/cards/FormalCard'
import DynamicTable from '../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../components/shared/PageLayout'
import Space from '../../components/shared/Space'
import { Button } from '../../components/ui/button'
import TakeConfirm from '../../components/ui/take-confirm'
import { cn } from '../../lib/utils'
import { useDeleteClientMutation, useGetSingleClientQuery } from '../../redux/propertyManager/client/clientApi'
import { Loader } from 'lucide-react'
import toast from 'react-hot-toast'

interface AssignedProperty {
  _id: string
  name: string
  type: string
  status: string
  progress: string
  projectImage: string
}

const PropertyClientDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const { data: clientResponse, isLoading } = useGetSingleClientQuery(id as string)
   
  const [deleteClient, { isLoading: isDeleting }] = useDeleteClientMutation()

  const client = clientResponse?.data

  const handleDeleteClient = async () => {
    try {
      const res = await deleteClient(id as string).unwrap()
      if (res.success) {
        toast.success("Client deleted successfully!")
        navigate("/property-admin/clients", { replace: true })
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete client. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin text-brand" size={40} />
      </div>
    )
  }

  const fullName = client?.name || "N/A"
  const isActive = client?.user?.isActive
  const status = isActive ? "Active" : "Blocked"
  const firstLetter = fullName.trim().charAt(0).toUpperCase()

  const assignedPropertiesColumns: ColumnDef<AssignedProperty>[] = [
    {
      id: 'name',
      header: 'Property Name',
      cell: ({ row }: { row: { original: AssignedProperty } }) => {
        return (
          <div className="flex items-center gap-2">
            <img src={row.original.projectImage} alt="Project" className='w-10 h-10 rounded-md object-cover' />
            <span className="font-medium">{row.original.name}</span>
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
        <div className="flex items-center gap-2">
          <Button
            onClick={() => alert("Remove property from client?")}
            size="sm"
            className='border bg-white hover:bg-white cursor-pointer border-red-500 text-red-500'
          >
            <HugeiconsIcon icon={Minus} />
          </Button>
          <Button
            className='cursor-pointer hover:bg-white'
            onClick={() => navigate(`/admin/properties/${row.original._id}`)}
            size="sm"
            variant="outline">
            <HugeiconsIcon icon={EyeIcon} />
          </Button>
        </div>
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
  ]

  return (
    <PageLayout title='Client Details'>
      <PageContent>
       
        <div className="w-32 h-32 mb-6">
          {client?.profile_image ? (
            <img 
              src={client.profile_image} 
              alt={fullName} 
              className='w-full h-full rounded-md object-cover border' 
            />
          ) : (
            <div className="w-full h-full rounded-md bg-brand/10 text-brand flex items-center justify-center text-4xl font-bold border border-brand/20">
              {firstLetter}
            </div>
          )}
        </div>

        <FormalCard header="Personal Information">
          <div className="responsive-grid-2 gap-y-6">
            <div>
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm'>Full Name</h1>
              <h1 className='text-[#666666] font-medium'>{fullName}</h1>
            </div>
            <div>
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm'>Email</h1>
              <h1 className='text-[#666666] font-medium'>{client?.email || "N/A"}</h1>
            </div>
            <div>
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm'>Contact Phone</h1>
              <h1 className='text-[#666666] font-medium'>{client?.phone || "N/A"}</h1>
            </div>
            <div>
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm'>Joined On</h1>
              <h1 className='text-[#666666] font-medium'>
                {client?.joinedOn ? new Date(client.joinedOn).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                }) : "N/A"}
              </h1>
            </div>
            <div>
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm'>Status</h1>
              <h1 className={cn('font-semibold', isActive ? 'text-green-600' : 'text-red-600')}>
                {status}
              </h1>
            </div>
          </div>
        </FormalCard>

        <Space size={4} />

        <div className="flex items-center gap-2">
          {/* Block/Unblock Button */}
          <Button className='bg-brand hover:bg-brand cursor-pointer' variant="default">
            <HugeiconsIcon icon={UserBlock01Icon} /> {isActive ? "Block" : "Unblock"} this Client
          </Button>

          {/* Delete Client with TakeConfirm */}
          <TakeConfirm
            title="Delete this client?"
            description="This action will permanently delete this client and all associated data. This cannot be undone."
            confirmText='Delete'
            onConfirm={handleDeleteClient} 
          >
            <Button 
              variant="destructive" 
              className="cursor-pointer min-w-[180px]"
              disabled={isDeleting}
            >
              {isDeleting ? (
                <Loader className="animate-spin w-4 h-4 mr-2" />
              ) : (
                <HugeiconsIcon icon={Delete02Icon} />
              )}
              {isDeleting ? "Deleting..." : "Delete this Client"}
            </Button>
          </TakeConfirm>
        </div>

        <Space size={4} />

        <FormalCard header="Assigned Properties" action={
          <Button className='bg-brand hover:bg-brand cursor-pointer'>
            <HugeiconsIcon icon={AddSquareFreeIcons} /> Add a Property
          </Button>
        }>
          <DynamicTable header={false} columns={assignedPropertiesColumns} data={assignedProperties} />
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default PropertyClientDetails;
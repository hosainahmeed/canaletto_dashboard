"use client"
import { AddSquareIcon, CircleIcon, City01Icon, UnavailableIcon, UserAccountIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useNavigate } from 'react-router-dom'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import TakeConfirm from '../../../components/ui/take-confirm'
import { cn } from '../../../lib/utils'
import { useGetAllPropertyManagerQuery } from '../../../redux/propertyManager/propertyMangerApi'
import { Loader } from 'lucide-react'

const PropertyManager = () => {
  const navigate = useNavigate()
  
  const { data: userDatas, isLoading } = useGetAllPropertyManagerQuery()

  const usrDta = userDatas?.data?.data || []

  const column = [
    {
      header: 'Manager Name',
      accessorKey: 'name', 
      cell: ({ row }: any) => {
        const name = row.original.name || "Unknown";
        const image = row.original.profile_image;
        
        
        const firstLetter = name.charAt(0).toUpperCase();

        return (
          <div className="flex items-center gap-2">
            {image ? (
             
              <img 
                src={image} 
                alt={name} 
                className="w-8 h-8 rounded-full object-cover" 
              />
            ) : (
              
              <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm border border-brand/20">
                {firstLetter}
              </div>
            )}
            <span className="font-medium">{name}</span>
          </div>
        );
      },
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
      accessorKey: 'createdAt',
      cell: ({ row }: any) => {
        return new Date(row.original.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })
      }
    },
    {
      header: 'Status',
      accessorKey: 'user.isActive',
      cell: ({ row }: any) => {
        const isActive = row.original.user?.isActive;
        return (
          <div className="flex items-center gap-2">
            <span className={cn(
              "px-2 py-1 rounded-md text-xs font-semibold", 
              isActive ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
            )}>
              {isActive ? 'Active' : 'Blocked'}
            </span>
          </div>
        )
      },
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      cell: ({ row }: any) => {
        const isActive = row.original.user?.isActive;
        return (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(`/admin/property-manager/${row?.original.id}`)}
              size="sm" variant="outline"
            >
              <HugeiconsIcon icon={UserAccountIcon} />
            </Button>
            <TakeConfirm
              title={`Are you sure you want to ${isActive ? 'block' : 'unblock'} ${row?.original.name}?`}
              description={`This action will ${isActive ? 'block' : 'unblock'} ${row?.original.name}.`}
              onConfirm={() => console.log(row?.original.id, 'Status update clicked')}
              confirmText="Continue"
              cancelText="Cancel"
            >
              <Button size="sm" variant="outline">
                <HugeiconsIcon
                  icon={!isActive ? UnavailableIcon : CircleIcon}
                  className={!isActive ? "text-red-500" : "text-gray-500"}
                />
              </Button>
            </TakeConfirm>
          </div>
        )
      },
    },
  ]

  return (
    <PageLayout 
      title="Property Manager"
      action={
        <Link to={`/admin/property-manager/add`}>
          <Button className='bg-brand text-white' variant="outline">
            <HugeiconsIcon icon={AddSquareIcon} /> Add New Manager
          </Button>
        </Link>
      } 
      icon={<HugeiconsIcon icon={City01Icon} />}
    >
      <PageContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-brand" size={40} />
          </div>
        ) : (
          <DynamicTable data={usrDta} columns={column} />
        )}
      </PageContent>
    </PageLayout>
  )
}

export default PropertyManager;
import { UserAccountIcon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import FormalCard from '../../../../components/shared/cards/FormalCard'
import DynamicTable from '../../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout'
import Space from '../../../../components/shared/Space'
import { Button } from '../../../../components/ui/button'
import { cn } from '../../../../lib/utils'

function PropertyDetails() {
  const propertyInvoiceData = [
    {
      title: "Property Files",
      value: "5 files"
    },
    {
      title: "Payment Invoices",
      value: "5 files"
    },
    {
      title: "Construction Progress",
      value: "45%"
    },
    {
      title: "Assigned Manager ",
      value: "Roberts Junior "
    }
  ]

  type PropertyClient = {
    id: string;
    profileImage: string
    name: string;
    email: string;
    phone: string;
    assignedProperty: string;
    joinedOn: string;
    status: string;
  }

  const propertyColumns = [
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }: any) => {
        return (
          <div className='flex items-center gap-2'>
            <img src={row.original.profileImage} alt={row.original.name} className='w-10 h-10 rounded-full object-cover' />
            <span>{row.original.name}</span>
          </div>
        )
      },
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },
    {
      header: "Assigned Property",
      accessorKey: "assignedProperty",
    },
    {
      header: "Joined On",
      accessorKey: "joinedOn",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "action",
      accessorKey: "id",
      cell: ({ row }: any) => {
        return (
          <Button variant="outline" size="sm">
            <HugeiconsIcon icon={UserAccountIcon} />
          </Button>
        )
      }
    }
  ]

  const propertyClientData: PropertyClient[] = [
    {
      id: "728ed52f",
      profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active"
    },
    {
      id: "e24433341299jh",
      profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: "David Kim",
      email: "rubel.cse@gmail.com",
      phone: "+1 215-555-0773",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active"
    },
    {
      id: "e2e2e2e255",
      profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: "Sophia White",
      email: "kamrul.tech@gmail.com",
      phone: "+1 206-555-0734",
      assignedProperty: "—",
      joinedOn: "Jul 10, 2025",
      status: "Active"
    },
    {
      id: "e2e2e223423e2",
      profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active"
    },
  ]
  return (
    <PageLayout title="Property Details">
      <PageContent>
        <FormalCard header="Property Invoices">
          <div className='responsive-grid-2'>
            {propertyInvoiceData.map((item, index) => (
              <div className={cn("border flex justify-between border-[#DDDDDD] p-4 rounded-md")} key={index}>
                <div>
                  <h3 className='text-[#B0B0B0] font-nunito-semibold-italic text-sm '>{item.title}</h3>
                  <p className='text-base'>{item.value}</p>
                </div>
                <Button className='bg-brand/20 text-brand hover:bg-brand/30 hover:text-brand cursor-pointer' type='button' variant='outline'>
                  <HugeiconsIcon size={16} icon={ViewIcon} />
                </Button>
              </div>
            ))}
          </div>
        </FormalCard>
        <Space size={4} />
        <FormalCard
          header="Property information"
        >
          <div>
            <p>Property information</p>
          </div>
        </FormalCard>
        <Space size={4} />
        <DynamicTable header={false} data={propertyClientData} columns={propertyColumns} />
      </PageContent>
    </PageLayout>
  )
}

export default PropertyDetails

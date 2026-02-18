import { UserAccountIcon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import FormalCard from '../../../../components/shared/cards/FormalCard'
import DynamicTable from '../../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout'
import Space from '../../../../components/shared/Space'
import { Button } from '../../../../components/ui/button'
import { cn } from '../../../../lib/utils'
import ImageGallery from '../../../../components/shared/imageComponents/ImageGallery'
import { IMAGE } from '../../../../constant/image.index'

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


  // <---------property info--------->
  type PropertyInformation = {
    id: string;
    name: string;
    propertyInfo: string;
    images: string[];
  }

  const propertyInfo: PropertyInformation[] = [
    {
      id: "prop-01",
      name: "Property Name",
      propertyInfo: "The Wilds Project",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-02",
      name: "Property Type",
      propertyInfo: "Residential Living",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-03",
      name: "Property Size",
      propertyInfo: "from 270 sqm",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-04",
      name: "Rooms",
      propertyInfo: "from 3-bedroom",
      images: [
        "https://images.unsplash.com/photo-1536376074432-ad717461c72f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1556912177-c54043bd4d44?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-05",
      name: "Construction Progress",
      propertyInfo: "Under Construction",
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-06",
      name: "Payment Plan",
      propertyInfo: "65 / 35",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-07",
      name: "Construction Progress",
      propertyInfo: "45%",
      images: [
        "https://images.unsplash.com/photo-1567496898905-af4139885fe2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1531835597954-9333932782e3?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-08",
      name: "Units",
      propertyInfo: "900 Units",
      images: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1449156001437-3a1621cdcd2e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: "prop-09",
      name: "Property Location",
      propertyInfo: "Abu Dhabi, Al Hudayriat Island, Bashayer Villas",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1428366284662-106b63e0295d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1444418185997-1145401101e0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1490197413360-dec914828135?auto=format&fit=crop&w=400&q=80"
      ]
    }
  ];


  const selectedProperty = propertyInfo[0];

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

        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10'>
          <ImageGallery
            topImage={selectedProperty.images[0]}
            bottomImages={selectedProperty.images.slice(1)}
          />
          <div className='flex-1'>
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
          </div>

        </div>
        <Space size={4} />
        <FormalCard
          header="Property information"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {propertyInfo.map((item, index) => (
              <div key={index} className=" p-4 rounded-md">
                <h3 className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">
                  {item.name}
                </h3>
                <p className="mt-[4px] font-bold text-[#666666] text-[16px]">{item.propertyInfo}</p>
              </div>
            ))}
          </div>

        </FormalCard>
        <Space size={4} />
        <DynamicTable header={false} data={propertyClientData} columns={propertyColumns} />
      </PageContent>
    </PageLayout>
  )
}

export default PropertyDetails

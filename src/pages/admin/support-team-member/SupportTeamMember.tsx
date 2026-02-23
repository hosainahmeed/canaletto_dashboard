import { AddSquareIcon, CircleIcon, UnavailableIcon, UserIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link, useNavigate } from 'react-router-dom';
import IconWrapper from '../../../components/shared/cards/IconWrapper';
import DynamicTable from '../../../components/shared/DynamicTable';
import { PageContent, PageLayout } from '../../../components/shared/PageLayout';
import { Button } from '../../../components/ui/button';
import TakeConfirm from '../../../components/ui/take-confirm';
import { cn } from '../../../lib/utils';

function SupportTeamMember() {
  const navigate = useNavigate()
  const columns = [
    {
      header: 'Manager Name',
      accessorKey: 'managerName',
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <img
            src={row.original.profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>{row.original.managerName}</span>
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
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.original.status === 'Active' ? 'text-green-500' : 'text-red-500'
          }`}>
          {row.original.status}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      cell: ({ row }: any) => {
        return (
          <div className="flex gap-2">
            <IconWrapper
              onClick={() => {
                navigate(`/admin/support/${row?.original?.id}`);
              }}
              className={cn("border p-2 w-fit h-fit rounded border-[#666666]")}
            >
              <HugeiconsIcon size={16} icon={UserIcon} />
            </IconWrapper>
            <TakeConfirm
              title="Are you sure you want to change the status?"
              cancelText="Cancel"
              confirmText="Confirm"
              onConfirm={() => console.log("Confirmed")}
            >
              <IconWrapper
                className={cn(
                  "border p-2 w-fit h-fit rounded",
                  row?.original?.status === "Active"
                    ? "border-[#666666]"
                    : "border-[#DC3545]",
                )}
              >
                <HugeiconsIcon
                  color={row?.original?.status === "Active" ? "#666666" : "red"}
                  size={16}
                  icon={
                    row.original.status === "Active"
                      ? CircleIcon
                      : UnavailableIcon
                  }
                />
              </IconWrapper>
            </TakeConfirm>
          </div>
        );
      },
    },
  ]

  const data = [
    {
      _id: '1',
      managerName: 'Emily Carter',
      email: 'tanim.cse@gmail.com',
      phone: '+1 919-555-0284',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '2',
      managerName: 'Robert Davis',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '3',
      managerName: 'Sophia White',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '4',
      managerName: 'Ayesha Rahman',
      email: 'rubel.cse@gmail.com',
      phone: '+1 215-555-0773',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '5',
      managerName: 'Thomas Baker',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '6',
      managerName: 'James Anderson',
      email: 'fahim.tech@gmail.com',
      phone: '+1 720-555-0641',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '7',
      managerName: 'Rachel Green',
      email: 'arif.design@gmail.com',
      phone: '+1 213-555-0890',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '8',
      managerName: 'Karen Thompson',
      email: 'kamrul.tech@gmail.com',
      phone: '+1 206-555-0734',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '9',
      managerName: 'Thomas Baker',
      email: 'rafiul.dev@gmail.com',
      phone: '+1 310-555-0247',
      assignedOn: 'Jul 10, 2025',
      status: 'Blocked',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    },
    {
      _id: '10',
      managerName: 'Michael Smith',
      email: 'shuvo.bd@gmail.com',
      phone: '+1 212-555-0198',
      assignedOn: 'Jul 10, 2025',
      status: 'Active',
      actions: '--',
      profileImage: 'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg',
    }
  ]
  return (
    <PageLayout title="Support Team Member"
      action={
        <Link to={`/admin/support/add`}>
          <Button className="bg-brand text-white" variant="outline">
            <HugeiconsIcon icon={AddSquareIcon} /> Add New Member
          </Button>
        </Link>
      }
    >
      <PageContent>
        <DynamicTable columns={columns} data={data} />
      </PageContent>
    </PageLayout>
  )
}

export default SupportTeamMember

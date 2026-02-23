import { useNavigate } from "react-router-dom";
import IconWrapper from "../../../../components/shared/cards/IconWrapper";
import { cn } from "../../../../lib/utils";

import { PageContent } from "../../../../components/shared/PageLayout";

import DynamicTable from "../../../../components/shared/DynamicTable";
import { Eye } from "lucide-react";
import FormalCard from "../../../../components/shared/cards/FormalCard";

function InterestedClients() {
  const navigate = useNavigate();
  const columns = [
    {
      header: "Manager Name",
      accessorKey: "managerName",
      cell: ({ row }: any) => {
        return (
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={row?.original?.profileImage}
              alt=""
            />
            <p>{row?.original?.managerName}</p>
          </div>
        );
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
      header: "Assigned On",
      accessorKey: "assignedOn",
    },

    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }: any) => {
        return (
          <div className="flex gap-2">
            <IconWrapper
              onClick={() => {
                navigate(`/admin/content-manager/${row?.original?.id}`);
              }}
              className={cn("border p-2 w-fit h-fit rounded border-[#666666]")}
            >
              <Eye size={16} />
            </IconWrapper>
          </div>
        );
      },
    },
  ];

  const data = [
    {
      id: "1",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Emily Carter",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedOn: "Jul 10, 2025",
      status: "Active",
      actions: "Actions",
    },
    {
      id: "2",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Robert Davis",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedOn: "Jul 10, 2025",
      status: "Blocked",
      actions: "Actions",
    },
    {
      id: "3",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Sophia White",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedOn: "Jul 10, 2025",
      status: "Blocked",
      actions: "Actions",
    },
    {
      id: "4",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Ayesha Rahman",
      email: "rubel.cse@gmail.com",
      phone: "+1 215-555-0773",
      assignedOn: "Jul 10, 2025",
      status: "Active",
      actions: "Actions",
    },
    {
      id: "5",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Thomas Baker",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedOn: "Jul 10, 2025",
      status: "Blocked",
      actions: "Actions",
    },
    {
      id: "6",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Rachel Green",
      email: "arif.design@gmail.com",
      phone: "+1 213-555-0890",
      assignedOn: "Jul 10, 2025",
      status: "Active",
      actions: "Actions",
    },
    {
      id: "7",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Karen Thompson",
      email: "kamrul.tech@gmail.com",
      phone: "+1 206-555-0734",
      assignedOn: "Jul 10, 2025",
      status: "Active",
      actions: "Actions",
    },
    {
      id: "8",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Thomas Baker",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedOn: "Jul 10, 2025",
      status: "Blocked",
      actions: "Actions",
    },
    {
      id: "9",
      profileImage:
        "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
      managerName: "Michael Smith",
      email: "shuvo.bd@gmail.com",
      phone: "+1 212-555-0198",
      assignedOn: "Jul 10, 2025",
      status: "Active",
      actions: "Actions",
    },
  ];
  return (
    <div>
      <FormalCard
        header="Interested Clients"
        headerStyle="font-nunito-semibold-italic"
      >
        <DynamicTable columns={columns} data={data} header={false} />
      </FormalCard>
    </div>
  );
}

export default InterestedClients;

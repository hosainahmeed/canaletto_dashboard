import {
  AddSquareIcon,
  CircleIcon,
  UnavailableIcon,
  UserIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useNavigate } from "react-router-dom";
import IconWrapper from "../../../components/shared/cards/IconWrapper";
import DynamicTable from "../../../components/shared/DynamicTable";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import { Button } from "../../../components/ui/button";
import TakeConfirm from "../../../components/ui/take-confirm";
import { cn } from "../../../lib/utils";
import { useGetAllContentManagerQuery } from "../../../redux/contentManager/contentManagerApi";
import { Loader } from "lucide-react"; 

function ContentManager() {
  const navigate = useNavigate();


  const { data: contentManagerData, isLoading } = useGetAllContentManagerQuery();

  const managers = contentManagerData?.data || [];

  const columns = [
    {
      header: "Manager Name",
      accessorKey: "name", 
      cell: ({ row }: any) => {
        const name = row?.original?.name || "N/A";
        const image = row?.original?.profile_image;
        const firstLetter = name.charAt(0).toUpperCase();

        return (
          <div className="flex gap-2 items-center">
            {image ? (
              <img
                className="w-10 h-10 rounded-full object-cover border"
                src={image}
                alt={name}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm border border-brand/20">
                {firstLetter}
              </div>
            )}
            <p className="font-medium text-[#666666]">{name}</p>
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
      accessorKey: "createdAt",
      cell: ({ row }: any) => {
        return new Date(row.original.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        });
      }
    },
    {
      header: "Status",
      accessorKey: "user.isActive",
      cell: ({ row }: any) => {
        const isActive = row?.original?.user?.isActive;
        return (
          <span className={cn(
            "px-2 py-1 rounded-md text-xs font-semibold",
            isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          )}>
            {isActive ? "Active" : "Blocked"}
          </span>
        );
      }
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }: any) => {
        const isActive = row?.original?.user?.isActive;
        const managerId = row?.original?.id;

        return (
          <div className="flex gap-2">
            <IconWrapper
              onClick={() => {
                navigate(`/admin/content-manager/${managerId}`);
              }}
              className={cn("border p-2 w-fit h-fit rounded border-[#666666] cursor-pointer hover:bg-gray-50")}
            >
              <HugeiconsIcon size={16} icon={UserIcon} />
            </IconWrapper>
            
            <TakeConfirm
              title={`Are you sure you want to ${isActive ? 'block' : 'unblock'} this manager?`}
              description={`This action will change the manager's access status.`}
              cancelText="Cancel"
              confirmText="Confirm"
              onConfirm={() => console.log("Status change for ID:", managerId)}
            >
              <IconWrapper
                className={cn(
                  "border p-2 w-fit h-fit rounded cursor-pointer",
                  isActive ? "border-[#666666] hover:bg-gray-50" : "border-[#DC3545] hover:bg-red-50",
                )}
              >
                <HugeiconsIcon
                  color={isActive ? "#666666" : "#DC3545"}
                  size={16}
                  icon={isActive ? CircleIcon : UnavailableIcon}
                />
              </IconWrapper>
            </TakeConfirm>
          </div>
        );
      },
    },
  ];

  return (
    <PageLayout
      title="Content Manager"
      action={
        <Link to={`/admin/content-manager/add`}>
          <Button className="bg-brand text-white" variant="outline">
            <HugeiconsIcon icon={AddSquareIcon} /> Add New Manager
          </Button>
        </Link>
      }
    >
      <PageContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-brand" size={40} />
          </div>
        ) : (
          <DynamicTable columns={columns} data={managers} />
        )}
      </PageContent>
    </PageLayout>
  );
}

export default ContentManager;
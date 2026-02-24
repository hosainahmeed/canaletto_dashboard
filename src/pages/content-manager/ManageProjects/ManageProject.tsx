import {
  AddSquareIcon,
  Search01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconWrapper from "../../../components/shared/cards/IconWrapper";
import DynamicTable from "../../../components/shared/DynamicTable";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export type ManageProjectType = {
  id: string;
  image: string;
  title: string;
  postedOn: string;
  postedBy: string;
  status: string
};

const MOCK_DATA: ManageProjectType[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Luxury Villa Project",
    status: "New Launch",
    postedOn: "2024-01-15",
    postedBy: "John Doe",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Modern Apartment Complex",
    status: "New Launch",
    postedOn: "2024-01-14",
    postedBy: "Jane Smith",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Beachfront Condos",
    status: "New Launch",
    postedOn: "2024-01-13",
    postedBy: "Mike Johnson",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Downtown Office Tower",
    status: "Upcoming Launch",
    postedOn: "2024-01-12",
    postedBy: "Sarah Wilson",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Suburban Housing Development",
    status: "Upcoming Launch",
    postedOn: "2024-01-11",
    postedBy: "Tom Brown",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop",
    title: "Green Energy Homes",
    status: "Upcoming Launch",
    postedOn: "2024-01-10",
    postedBy: "Emily Davis",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a28a72?q=80&w=200&auto=format&fit=crop",
    title: "Smart City Initiative",
    status: "Available to Reserve",
    postedOn: "2024-01-09",
    postedBy: "Chris Martin",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&auto=format&fit=crop",
    title: "Eco-Friendly Apartments",
    status: "Available to Reserve",
    postedOn: "2024-01-08",
    postedBy: "Lisa Anderson",
  },
];

function ManageProject() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleView = (id: string) => {
    console.log("View project:", id);
    navigate(`/content-manager/manage-projects/${id}`);
  };

  const columns: ColumnDef<ManageProjectType>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex items-center">
          <img
            src={row.original.image}
            alt={row.original.title}
            className="w-20 h-12 rounded-lg object-cover"
          />
        </div>
      ),
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <span className="font-medium text-gray-700 truncate block">
          {row.original.title}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Project Status",
      cell: ({ row }) => (
        <span className="font-medium text-gray-700">
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "postedOn",
      header: "Posted On",
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.postedOn}</span>
      ),
    },
    {
      accessorKey: "postedBy",
      header: "Posted By",
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.postedBy}</span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <IconWrapper
          onClick={() => handleView(row.original.id)}
          className="border w-fit p-2 hover:bg-brand/20 cursor-pointer"
        >
          <HugeiconsIcon size={16} icon={ViewIcon} />
        </IconWrapper>
      ),
    },
  ];

  const filteredData = MOCK_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <PageLayout
        title="Manage Projects"
        action={
          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Select>
                <SelectTrigger className="w-full sm:w-48 bg-white border-gray-200">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="new">New Launch</SelectItem>
                    <SelectItem value="upcoming">Upcoming Launch</SelectItem>
                    <SelectItem value="available">Available to Reserve</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="relative w-full sm:w-64">
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Search By Name"
                  className="pl-10 bg-white border-gray-200 focus:ring-brand focus:border-brand"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Link to={`/content-manager/manage-projects/add-project`}>
                <Button className="bg-brand text-white" variant="outline">
                  <HugeiconsIcon icon={AddSquareIcon} /> Add New Project{" "}
                </Button>
              </Link>
            </div>
          </div>
        }
      >
        <PageContent>
          <DynamicTable columns={columns} data={filteredData} />
        </PageContent>
      </PageLayout>
    </div>
  );
}

export default ManageProject;

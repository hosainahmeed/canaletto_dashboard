import { ArrowLeft01Icon, Search01Icon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'
import DynamicTable from '../../../../components/shared/DynamicTable'
import IconWrapper from '../../../../components/shared/cards/IconWrapper'
import { PageContent, PageLayout } from '../../../../components/shared/PageLayout'
import { Input } from '../../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select'
import { cn } from '../../../../lib/utils'

export type ProjectItem = {
  id: string
  image: string
  title: string
  status: 'New Launch' | 'Upcoming Launch' | 'Available to Reserve'
  postedOn: string
  postedBy: string
}

const statusColors: Record<ProjectItem['status'], string> = {
  'New Launch': 'text-[#B08D59]',
  'Upcoming Launch': 'text-[#E8A05F]',
  'Available to Reserve': 'text-[#966E38]',
}

const MOCK_DATA: ProjectItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Parkgate (Dubai Hills Estate)',
    status: 'New Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Lena Fischer',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Armani Beach Residences (Palm Jum...',
    status: 'New Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Emma Braun',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Beachgate by Address (Emaar Beac...',
    status: 'New Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Noah Hoffmann',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Parkgate (Dubai Hills Estate)',
    status: 'Upcoming Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Jonas Weber',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Oria at Dubai Creek Harbour',
    status: 'Upcoming Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Maximilian Becker',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Binghatti Onyx (Jumeirah Village Cir...',
    status: 'Upcoming Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Hannah Wagner',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Aeon at Dubai Creek Harbour',
    status: 'Upcoming Launch',
    postedOn: '27 Aug 2026',
    postedBy: 'Finn Richter',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Beachgate by Address (Emaar Beac...',
    status: 'Available to Reserve',
    postedOn: '27 Aug 2026',
    postedBy: 'Alex Müller',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=200&auto=format&fit=crop',
    title: 'Seapoint (Emaar Beachfront)',
    status: 'Available to Reserve',
    postedOn: '27 Aug 2026',
    postedBy: 'Emma Braun',
  },
]

function NewProjects() {
  const [searchQuery, setSearchQuery] = useState('')


  const columns: ColumnDef<ProjectItem>[] = [
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ row }) => (
        <div className="flex items-center">
          <img
            src={row.original.image}
            alt={row.original.title}
            className="w-16 h-10 rounded-lg object-cover"
          />
        </div>
      ),
    },
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => (
        <span className="font-medium text-gray-700 max-w-[200px] truncate block">
          {row.original.title}
        </span>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Project status',
      cell: ({ row }) => (
        <span className={cn("font-medium", statusColors[row.original.status])}>
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: 'postedOn',
      header: 'Posted On',
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.postedOn}</span>
      ),
    },
    {
      accessorKey: 'postedBy',
      header: 'Posted By',
      cell: ({ row }) => (
        <span className="text-gray-600">{row.original.postedBy}</span>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <IconWrapper

          className="border w-fit p-2 hover:bg-brand/20 cursor-pointer"
        >
          <HugeiconsIcon size={16} icon={ViewIcon} />
        </IconWrapper>
      ),
    },
  ]

  const filteredData = MOCK_DATA.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageLayout title="New Projects">
        <div className="flex flex-col sm:flex-row justify-end mb-4 items-start sm:items-center gap-4 ">


          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select>
              <SelectTrigger className="w-full sm:w-48 bg-white border-gray-200">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">New Launch</SelectItem>
                  <SelectItem value="upcoming">Upcoming Launch</SelectItem>
                  <SelectItem value="reserve">Available to Reserve</SelectItem>
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
          </div>
        </div>

        <PageContent>
          <DynamicTable
            columns={columns}
            data={filteredData}
          />
        </PageContent>
      </PageLayout>
    </div>
  )
}

export default NewProjects


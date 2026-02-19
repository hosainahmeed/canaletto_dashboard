import { ArrowLeft01Icon, Search01Icon, ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'
import DynamicTable from '../../../../components/shared/DynamicTable'
import IconWrapper from '../../../../components/shared/cards/IconWrapper'
import { PageContent } from '../../../../components/shared/PageLayout'
import { Input } from '../../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select'

export type MarketUpdate = {
  id: string
  image: string
  title: string
  postedOn: string
  postedBy: string
}

const MOCK_DATA: MarketUpdate[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Lena Fischer',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Emma Braun',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1544526226-d4568090ffb8?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Noah Hoffmann',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec239f3d6b9?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Jonas Weber',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Maximilian Becker',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1448630360428-6e238892c61e?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Hannah Wagner',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Finn Richter',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Alex Müller',
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop',
    title: 'Dubai Property Prices Rise in Q1 2026',
    postedOn: '27 Aug 2026',
    postedBy: 'Emma Braun',
  },
]

function MarketUpdates() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleView = (id: string) => {
    console.log('View market update:', id)
  }

  const columns: ColumnDef<MarketUpdate>[] = [
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
        <span className="font-medium text-gray-700 max-w-[300px] truncate block">
          {row.original.title}
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
          onClick={() => handleView(row.original.id)}
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
          <span className="font-medium text-lg text-gray-800">Market Updates</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-48 bg-white border-gray-200">
              <SelectValue placeholder="Filter by Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
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
    </div>
  )
}

export default MarketUpdates


import { ViewIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ColumnDef } from '@tanstack/react-table'
import IconWrapper from '../../../components/shared/cards/IconWrapper'

export type Propertise = {
  id: string
  name: string
  type: string
  status: "Active" | "Under Construction",
  progress: string
}

export const PropertiseDataColumn: ColumnDef<Propertise>[] = [
  {
    id: 'name',
    header: 'Property Name',
    cell: ({ row }) => row.original.name,
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
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <IconWrapper className='border w-fit p-2 hover:bg-brand/20'>
        <HugeiconsIcon size={16} icon={ViewIcon} />
      </IconWrapper>
    ),
  },
]
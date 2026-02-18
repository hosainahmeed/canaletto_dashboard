'use client'

import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { ButtonGroup } from '../../../components/ui/button-group'
import { Field } from '../../../components/ui/field'
import { Input } from '../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { PropertiseDataColumn, type Propertise } from './PropertiseDataColumn'

function getData(): Promise<Propertise[]> {

  return Promise.resolve([
    {
      id: "1",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Platinum Shores Tower",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "2",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Red Sea Crescent Villas",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "3",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Al Bahar Luxury Homes",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "4",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Emerald Valley Estates",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "5",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Red Sea Crescent Villas",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "6",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Palm Oasis Towers",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "7",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Sapphire Gardens Residences",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "8",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Al Bahar Luxury Homes",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "9",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Desert Mirage Residences",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    {
      id: "10",
      propertyImage: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      name: "Red Sea Crescent Villas",
      type: "Residential Living",
      status: "Under Construction",
      progress: "45%",
    },
    // ...
  ])
}

function ManagePropertise() {
  const [data, setData] = useState<Propertise[]>([])
  const [loading, setLoading] = useState(true)
  const [, setSearchQuery] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  if (loading) {
    return (
      <PageLayout title="Manage Clients" action={<button className="btn btn-primary">Add Client</button>}>
        <PageContent>
          <Loader className='animate-spin' />
        </PageContent>
      </PageLayout>
    )
  }

  const handlerNavigate = (id: string) => {
    navigate(`/admin/properties/${id}`)
  }

  const renderAction = () => {
    return (
      <div className='flex gap-2'>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="active">Active Users</SelectItem>
              <SelectItem value="blocked">Blocked Users</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Field>
          <ButtonGroup>
            <Input onChange={handleSearch} className='h-9 focus:outline-none! focus:ring-0!' id="input-button-group" placeholder="Type to search..." />
            <Button size='default' className="h-9" variant="outline">Search</Button>
          </ButtonGroup>
        </Field>
      </div>
    )
  }

  return (
    <PageLayout title="Manage Properties" action={renderAction()}>
      <PageContent children={<DynamicTable columns={PropertiseDataColumn(handlerNavigate)} data={data} />} />
    </PageLayout>
  )
}

export default ManagePropertise

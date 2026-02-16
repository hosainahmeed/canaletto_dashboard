'use client'

import { useEffect, useState } from 'react'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { ButtonGroup } from '../../../components/ui/button-group'
import { Field } from '../../../components/ui/field'
import { Input } from '../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { columns, type Client } from './columns'

function getData(): Promise<Client[]> {

  return Promise.resolve([
    {
      id: "728ed52f",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e24433341299jh",
      name: "David Kim",
      email: "rafiul.dev@gmail.com",
      phone: "+1 213-555-0890",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e2e255",
      name: "Sophia White",
      email: "kamrul.tech@gmail.com",
      phone: "+1 206-555-0734",
      assignedProperty: "—",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e223423e2",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2234e2e2",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "234",
      name: "John Miller",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedProperty: "—",
      joinedOn: "Jul 10, 2025",
      status: "Blocked",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e2e123322",
      name: "Chris Brown",
      email: "fahim.tech@gmail.com",
      phone: "+1 720-555-0641",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e2e2332",
      name: "Daniel Lee",
      email: "arif.design@gmail.com",
      phone: "+1 212-555-0198",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "728ed52f",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e244333455",
      name: "David Kim",
      email: "rafiul.dev@gmail.com",
      phone: "+1 213-555-0890",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e2e332",
      name: "Sophia White",
      email: "kamrul.tech@gmail.com",
      phone: "+1 206-555-0734",
      assignedProperty: "—",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2sdfe2e2e2",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2esdsgfg342342sdfsd2e2",
      name: "Anthony Clark",
      email: "tanim.cse@gmail.com",
      phone: "+1 919-555-0284",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e22wwersdfe2",
      name: "John Miller",
      email: "rafiul.dev@gmail.com",
      phone: "+1 310-555-0247",
      assignedProperty: "—",
      joinedOn: "Jul 10, 2025",
      status: "Blocked",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2e234242e2",
      name: "Chris Brown",
      email: "fahim.tech@gmail.com",
      phone: "+1 720-555-0641",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
    {
      id: "e2e2easdasd2e2",
      name: "Daniel Lee",
      email: "arif.design@gmail.com",
      phone: "+1 212-555-0198",
      assignedProperty: "Canaletto Sky World",
      joinedOn: "Jul 10, 2025",
      status: "Active",
      img: "https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg"
    },
   
  ])
}



function ManageClients() {
  const [data, setData] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  console.log(searchQuery)
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

  const renderRouting = () => {
    alert("Routing to client details page...")
    console.log("Routing to client details page...")
  }

  if (loading) {
    return (
      <PageLayout title="Manage Clients" action={<button className="btn btn-primary">Add Client</button>}>
        <PageContent>
          <div>Loading...</div>
        </PageContent>
      </PageLayout>
    )
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
    <PageLayout title="Manage Clients" action={renderAction()}>
      <PageContent children={<DynamicTable columns={columns(renderRouting)} data={data} />} />
    </PageLayout>
  )
}

export default ManageClients

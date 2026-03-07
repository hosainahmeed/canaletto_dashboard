'use client'

import { Loader } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import DynamicTable from '../../../components/shared/DynamicTable'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { ButtonGroup } from '../../../components/ui/button-group'
import { Field } from '../../../components/ui/field'
import { Input } from '../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { clientColumns } from './clientColumns'
import { useGetAllClientsQuery } from '../../../redux/propertyManager/client/clientApi'

function ManageClients() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  

  const { data: clientsResponse, isLoading } = useGetAllClientsQuery(undefined)

  const filteredData = useMemo(() => {
    const allClients = clientsResponse?.data || []

    console.log(allClients)

    return allClients.filter((client: any) => {
      const matchesSearch = 
        client.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email?.toLowerCase().includes(searchQuery.toLowerCase())

      const isActive = client.user?.isActive
      const matchesStatus = 
        statusFilter === 'all' || 
        (statusFilter === 'active' && isActive) || 
        (statusFilter === 'blocked' && !isActive)

      return matchesSearch && matchesStatus
    })
  }, [clientsResponse, searchQuery, statusFilter])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const renderRouting = (id: string) => {
    navigate(`/admin/clients/${id}`)
  }

  if (isLoading) {
    return (
      <PageLayout title="Manage Clients">
        <PageContent>
          <div className="flex justify-center items-center py-20">
            <Loader className='animate-spin text-brand' size={40} />
          </div>
        </PageContent>
      </PageLayout>
    )
  }

  const renderAction = () => {
    return (
      <div className='flex gap-2'>
        <Select onValueChange={(value) => setStatusFilter(value)} defaultValue="all">
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
            <Input 
              onChange={handleSearch} 
              className='h-9 focus:outline-none! focus:ring-0!' 
              id="input-button-group" 
              placeholder="Type to search..." 
            />
            <Button size='default' className="h-9" variant="outline">Search</Button>
          </ButtonGroup>
        </Field>
      </div>
    )
  }

  return (
    <PageLayout title="Manage Clients" action={renderAction()}>
      <PageContent>
        <DynamicTable 
          columns={clientColumns(renderRouting)} 
          data={filteredData} 
        />
      </PageContent>
    </PageLayout>
  )
}

export default ManageClients
import { AiContentGenerator02Icon, Analytics02Icon, City01Icon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useMemo } from 'react'
import FormalCard from '../../components/shared/cards/FormalCard'
import StatusCard from '../../components/shared/cards/StatusCard'
import { PageLayout } from '../../components/shared/PageLayout'
import Space from '../../components/shared/Space'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'


function AdminDashboard() {
  const statusData = [
    {
      title: "Total Clients",
      value: 100,
      icon: <HugeiconsIcon icon={UserIcon} />
    },
    {
      title: "Total Properties",
      value: 100,
      icon: <HugeiconsIcon icon={City01Icon} />
    },
    {
      title: "Active Projects",
      value: 100,
      icon: <HugeiconsIcon icon={UserIcon} />
    },
    {
      title: "Total Content",
      value: 100,
      icon: <HugeiconsIcon icon={AiContentGenerator02Icon} />
    }
  ]

  const renderHeader = useMemo(() => {
    return (
      <div className='flex justify-between items-center'>
        <h1>Showing activities for Today</h1>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Today" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="last_24_hours">Last 24 Hours</SelectItem>
              <SelectItem value="last_week">Last Week</SelectItem>
              <SelectItem value="last_fortnight">Last Fortnight</SelectItem>
              <SelectItem value="last_month">Last Month</SelectItem>
              <SelectItem value="last_year">Last Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    )
  }, [])

  return (
    <PageLayout title="Admin Dashboard" icon={<HugeiconsIcon icon={Analytics02Icon} />}>
      <div className='responsive-grid-4'>
        {statusData.map((item, index) => (
          <StatusCard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>
      <Space size={4} />
      <FormalCard header={
        renderHeader
      }>
        <div>
          <h1>hosain</h1>
        </div>
      </FormalCard>
    </PageLayout>
  )
}

export default AdminDashboard
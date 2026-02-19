import { Analytics02Icon, City01Icon, Invoice01Icon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import FormalCard from '../../components/shared/cards/FormalCard'
import StatusCard from '../../components/shared/cards/StatusCard'
import ComponentTitle from '../../components/shared/ComponentTitle'
import { PageLayout } from '../../components/shared/PageLayout'
import Space from '../../components/shared/Space'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { cn } from '../../lib/utils'
import RecentlyAddedClients from './RecentlyAddedClients'


function PropertyManagerDashboard() {
  const navigate = useNavigate()
  const statusData = [
    {
      title: "Total Clients",
      value: 110,
      icon: <HugeiconsIcon icon={UserIcon} />
    },
    {
      title: "Total Properties",
      value: 26,
      icon: <HugeiconsIcon icon={City01Icon} />
    },
    {
      title: "Assigned Properties",
      value: 25,
      icon: <HugeiconsIcon icon={UserIcon} />
    },
    {
      title: "Pending Invoices",
      value: 0,
      icon: <HugeiconsIcon icon={Invoice01Icon} />
    }
  ]

  const activitiesData = [
    {
      title: "New client added today",
      value: "03",
      icon: <HugeiconsIcon size={24} icon={UserIcon} />,
      growth: "10%",
      isPositive: true,
      growthStatus: "Higher than yesterday"
    },
    {
      title: "New Properties added today",
      value: "03",
      icon: <HugeiconsIcon size={24} icon={City01Icon} />,
      growth: "5%",
      isPositive: false,
      growthStatus: "Lower than yesterday"
    },
    {
      title: "Payment invoice created today",
      value: "03",
      icon: <HugeiconsIcon size={24} icon={Invoice01Icon} />,
      growth: "10%",
      isPositive: true,
      growthStatus: "Higher than yesterday"
    }
  ]

  const renderHeader = useMemo(() => {
    return (
      <div className='flex justify-between items-center'>
        <h1 className='text-xl italic text-[#666666]'>Showing activities</h1>
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

  const renderContent = () => {
    return (
      <div className='flex flex-col gap-4'>
        {
          activitiesData.map((item, index) => (
            <div className="flex justify-between items-center gap-2" key={index}>

              <div className="flex items-center gap-2">
                <div className='flex items-center bg-brand/20 w-12 h-12 p-2 rounded  justify-center text-brand border-[.5px] border-brand/20'>
                  {item.icon}
                </div>
                <div>
                  <h1 className='text-[#B0B0B0] italic capitalize line-clamp-1 text-lg'>{item.title}</h1>
                  <h1 className='text-brand italic capitalize line-clamp-1 text-lg'>{item.value}</h1>
                </div>
              </div>
              <div className="flex items-center text-sm gap-2">
                {item.isPositive ? <TrendingUp className="text-green-500" /> : <TrendingDown className="text-red-500" />}
                <h1 className={cn("text-brand ", item.isPositive ? "text-green-500" : "text-red-500")}>{item.growth}</h1>
                <h1 className="text-[#B0B0B0] text-sm">{item.growthStatus}</h1>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  return (
    <PageLayout title="Dashboard" icon={<HugeiconsIcon icon={Analytics02Icon} />}>
      <div className='responsive-grid-4'>
        {statusData.map((item, index) => (
          <StatusCard key={index} title={item.title} value={item.value} icon={item.icon} />
        ))}
      </div>
      <Space size={4} />
      <FormalCard header={
        renderHeader
      }>
        {renderContent()}
      </FormalCard>
      <Space size={4} />
      <ComponentTitle title="Recently added clients" buttonLabel="View All" onButtonClick={() => navigate('/property-admin/clients')} />
      <RecentlyAddedClients />
    </PageLayout>
  )
}
export default PropertyManagerDashboard

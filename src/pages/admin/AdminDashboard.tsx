import { AiContentGenerator02Icon, Analytics02Icon, City01Icon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import ComponentTitle from '../../components/shared/ComponentTitle'
import DynamicTable from '../../components/shared/DynamicTable'
import { PageLayout } from '../../components/shared/PageLayout'
import { clientColumns } from './clients/clientColumns'

const StatusCard = lazy(() => import('../../components/shared/cards/StatusCard'));
const Activities = lazy(() => import('../../components/admin-components/Activities'));

function AdminDashboard() {
  const navigate = useNavigate()
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



  return (
    <Suspense fallback={<Loader className='animate-spin' />}>
      <PageLayout title="Admin Dashboard" icon={<HugeiconsIcon icon={Analytics02Icon} />}>
        <div className="flex flex-col gap-4">
          <div className='responsive-grid-4'>
            {statusData.map((item, index) => (
              <StatusCard key={index} title={item.title} value={item.value} icon={item.icon} />
            ))}
          </div>
          <Activities />
          <ComponentTitle title="Recently added clients" buttonLabel="View All" onButtonClick={() => navigate('/admin/clients')} />
          <DynamicTable columns={clientColumns((id) => navigate(`/admin/clients/${id}`))} data={[{
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
          }]} />
        </div>
      </PageLayout>
    </Suspense>
  )
}

export default AdminDashboard
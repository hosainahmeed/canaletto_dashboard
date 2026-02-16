import { AiContentGenerator02Icon, Analytics02Icon, City01Icon, UserIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { lazy, Suspense } from 'react'
import { PageLayout } from '../../components/shared/PageLayout'
import Space from '../../components/shared/Space'
import { Loader } from 'lucide-react'

const StatusCard = lazy(() => import('../../components/shared/cards/StatusCard'));
const Activities = lazy(() => import('../../components/admin-components/Activities'));

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



  return (
    <Suspense fallback={<Loader className='animate-spin' />}>
      <PageLayout title="Admin Dashboard" icon={<HugeiconsIcon icon={Analytics02Icon} />}>
        <div className='responsive-grid-4'>
          {statusData.map((item, index) => (
            <StatusCard key={index} title={item.title} value={item.value} icon={item.icon} />
          ))}
        </div>
        <Space size={4} />
        <Activities />
      </PageLayout>
    </Suspense>
  )
}

export default AdminDashboard
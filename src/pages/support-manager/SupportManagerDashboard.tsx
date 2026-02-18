import { Analytics02Icon, CustomerSupportIcon, InboxUnreadIcon, MessageMultiple02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { PageLayout } from '../../components/shared/PageLayout'

const StatusCard = lazy(() => import('../../components/shared/cards/StatusCard'));
const SupportPanelActivitise = lazy(() => import('../../components/admin-components/SupportPanelActivitise'));

function SupportManagerDashboard() {
  const statusData = [
    {
      title: "Total Conversations",
      value: 124,
      icon: <HugeiconsIcon icon={MessageMultiple02Icon} />
    },
    {
      title: "Resolved Today",
      value: 45,
      icon: <HugeiconsIcon icon={CustomerSupportIcon} />
    },
    {
      title: "Unread Messages",
      value: 0,
      icon: <HugeiconsIcon icon={InboxUnreadIcon} />
    }
  ]



  return (
    <Suspense fallback={<Loader className='animate-spin' />}>
      <PageLayout title="Admin Dashboard" icon={<HugeiconsIcon icon={Analytics02Icon} />}>
        <div className="flex flex-col gap-4">
          <div className='responsive-grid-3'>
            {statusData.map((item, index) => (
              <StatusCard key={index} title={item.title} value={item.value} icon={item.icon} />
            ))}
          </div>
          <SupportPanelActivitise />
        </div>
      </PageLayout>
    </Suspense>
  )
}

export default SupportManagerDashboard
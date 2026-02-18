import { LockPasswordIcon, UserEdit01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useNavigate } from 'react-router-dom'
import FormalCard from '../../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import Space from '../../../components/shared/Space'
import { Button } from '../../../components/ui/button'
import { cn } from '../../../lib/utils'

interface SupportManagerDetails {
  profileImage: string
  fullName: string
  email: string
  contactPhone: string
  status: string
}

const SupportManagerProfile = () => {
  const navigate = useNavigate()
  const clientDetails: SupportManagerDetails = {
    profileImage: 'https://krita-artists.org/uploads/default/original/3X/c/f/cfc4990e32f31acd695481944f2163e96ff7c6ba.jpeg',
    fullName: 'Roberts Junior',
    email: 'robert @canaletto.com',
    contactPhone: '+ 1 919 - 555 -0284',
    status: 'Active',
  }
  return (
    <PageLayout title='Manage Profile'>
      <PageContent>
        <div className="w-32 h-32 mb-4">
          <img src={clientDetails.profileImage} alt="Profile" className='w-full h-full rounded-md' />
        </div>
        <FormalCard header="My Information">
          <div className="responsive-grid-2">
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Full Name</h1>
              <h1 className='text-[#666666]'>{clientDetails.fullName}</h1>
            </div>
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Email</h1>
              <h1 className='text-[#666666]'>{clientDetails.email}</h1>
            </div>
            <div className="">
              <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>Contact Phone</h1>
              <h1 className='text-[#666666]'>{clientDetails.contactPhone}</h1>
            </div>
            <div className='text-[#B0B0B0] font-nunito-semibold-italic'>
              <h1>Status</h1>
              <h1 className={cn('font-semibold', clientDetails.status === 'Active' ? 'text-green-600' : 'text-red-600')}>{clientDetails.status}</h1>
            </div>
          </div>
          <Space size={4} />
          <div className="flex gap-2">
            <Button
              onClick={() => {
                navigate('/support-manager/profile/update-profile')
              }}
              className='bg-linear-to-bl to-brand from-[#B08D59]'>
              <HugeiconsIcon icon={UserEdit01Icon} />Update profile </Button>
            <Button
              onClick={() => {
                navigate('/support-manager/profile/change-password')
              }}
              className='bg-linear-to-bl to-red-900 from-red-500'><HugeiconsIcon icon={LockPasswordIcon} />Update password </Button>
          </div>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default SupportManagerProfile
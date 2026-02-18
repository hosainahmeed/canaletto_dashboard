import { Edit04Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useNavigate } from 'react-router-dom'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import Space from '../../../components/shared/Space'
import FormalCard from '../../../components/shared/cards/FormalCard'
import { Button } from '../../../components/ui/button'
import { cn } from '../../../lib/utils'

function LegalCompanyInfo() {
  const navigate = useNavigate()
  const legalInfo = {
    'Company Name': 'Canaletto Sky Real Estate LLC',
    'Registered Office Address': 'Office 1204, Business Bay Tower Business Bay, Dubai, United Arab Emirates',
    'Trade License Number': 'TL - 9876543',
    'Issuing Authority': 'Dubai Department of Economy and Tourism(DET)',
    'Business Activity': 'Real Estate Development and Property Investment Services',
    'Phone Number': '+ 971 4 123 4567',
    'Official Website': 'http://www.canalettosky.com',
  }

  const handleUpdateInfo = () => {
    // Handle update info logic here
    console.log('Update info clicked');
    navigate('/admin/legal-company-info/edit');
  };

  return (
    <PageLayout title='Legal & Company Info'>
      <PageContent>
        <FormalCard header="Legal & Company Info">
          <div className="responsive-grid-2">
            {Object.entries(legalInfo).map(([key, value]) => (
              <div className={cn("border flex justify-between border-[#DDDDDD] p-4 rounded-md")} key={key}>
                <div className="">
                  <h1 className='text-[#B0B0B0] font-nunito-semibold-italic'>{key}</h1>
                  <h1 className='text-[#666666]'>{value}</h1>
                </div>
              </div>
            ))}
          </div>
          <Space size={4} />
          <Button
            onClick={handleUpdateInfo}
            className='bg-brand hover:bg-brand/80 hover:text-white cursor-pointer text-white' type="button" variant="outline"><HugeiconsIcon icon={Edit04Icon} />Update Info</Button>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default LegalCompanyInfo

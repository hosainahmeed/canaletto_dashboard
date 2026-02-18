import { useState } from 'react'
import FormalCard from '../../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import Space from '../../../components/shared/Space'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'

interface CompanyInfo {
  companyName: string
  registeredOfficeAddress: string
  tradeLicenseNumber: string
  issuingAuthority: string
  businessActivity: string
  phoneNumber: string
  officialWebsite: string
}

function UpdateCompanyInfo() {
  const [formData, setFormData] = useState<CompanyInfo>({
    companyName: 'Canaletto Sky Real Estate LLC',
    registeredOfficeAddress: 'Office 1204, Business Bay Tower Business Bay, Dubai, United Arab Emirates',
    tradeLicenseNumber: 'TL-9876543',
    issuingAuthority: 'Dubai Department of Economy and Tourism (DET)',
    businessActivity: 'Real Estate Development and Property Investment Services',
    phoneNumber: '+971 4 123 4567',
    officialWebsite: 'http://www.canalettosky.com'
  })

  const handleInputChange = (field: keyof CompanyInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Saving company info:', formData)
    // Add API call or state management logic here
  }


  return (
    <PageLayout title='Update Legal & Company Info'>
      <PageContent>
        <FormalCard header={
          <div>
            <h1 className='text-lg text-[#666666] font-nunito-semibold-italic'>Legal & Company Information</h1>
            <p className='text-sm text-[#B0B0B0] font-nunito-semibold-italic'>Keep your legal and company details up to date.</p>
          </div>
        }>
          <form onSubmit={handleSubmit}>
            <div className="responsive-grid-2">
              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Company Name</label>
                <Input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Registered Office Address</label>
                <Input
                  type="text"
                  value={formData.registeredOfficeAddress}
                  onChange={(e) => handleInputChange('registeredOfficeAddress', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Trade License Number</label>
                <Input
                  type="text"
                  value={formData.tradeLicenseNumber}
                  onChange={(e) => handleInputChange('tradeLicenseNumber', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Issuing Authority</label>
                <Input
                  type="text"
                  value={formData.issuingAuthority}
                  onChange={(e) => handleInputChange('issuingAuthority', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Business Activity</label>
                <textarea
                  value={formData.businessActivity}
                  onChange={(e) => handleInputChange('businessActivity', e.target.value)}
                  className="w-full p-3 border border-[#DDDDDD] rounded-md focus:outline-none focus:ring-2 focus:ring-brand/20 min-h-20 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Phone Number</label>
                <Input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Official Website</label>
                <Input
                  type="url"
                  value={formData.officialWebsite}
                  onChange={(e) => handleInputChange('officialWebsite', e.target.value)}
                  className="border-[#DDDDDD] focus:ring-brand/20"
                />
              </div>
            </div>

            <Space size={6} />

            <div className="flex gap-3">
              <Button
                type="submit"
                className='bg-brand hover:bg-brand/80 text-white'
              >
                Save Changes
              </Button>
            </div>
          </form>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default UpdateCompanyInfo

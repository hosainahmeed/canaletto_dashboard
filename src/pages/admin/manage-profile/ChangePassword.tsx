import { useState } from 'react'
import FormalCard from '../../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import Space from '../../../components/shared/Space'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'

interface PasswordForm {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

function ChangePassword() {
  const [formData, setFormData] = useState<PasswordForm>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState<Partial<PasswordForm>>({})

  const handleInputChange = (field: keyof PasswordForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<PasswordForm> = {}

    if (!formData.oldPassword) {
      newErrors.oldPassword = 'Old password is required'
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required'
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password'
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Password change request:', {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword
      })
      // Add API call or state management logic here
    }
  }

  return (
    <PageLayout title='Update Password'>
      <PageContent>
        <FormalCard header={
          <div>
            <h1 className='text-lg text-[#666666] font-nunito-semibold-italic'>Update Password</h1>
            <p className='text-sm text-[#B0B0B0] font-nunito-semibold-italic'>Change your password to keep your account secure.</p>
          </div>
        }>
          <form onSubmit={handleSubmit}>
            <div className='space-y-4 responsive-grid-2'>
              <div className="flex flex-col gap-2">
                <label htmlFor="oldPassword" className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Old Password</label>
                <Input
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  value={formData.oldPassword}
                  onChange={(e) => handleInputChange('oldPassword', e.target.value)}
                  className={`border-[#DDDDDD] focus:ring-brand/20 ${errors.oldPassword ? 'border-red-500' : ''}`}
                  placeholder="Enter your current password"
                />
                {errors.oldPassword && (
                  <p className="text-red-500 text-sm">{errors.oldPassword}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="newPassword" className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">New Password</label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => handleInputChange('newPassword', e.target.value)}
                  className={`border-[#DDDDDD] focus:ring-brand/20 ${errors.newPassword ? 'border-red-500' : ''}`}
                  placeholder="Enter your new password"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">{errors.newPassword}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-[#B0B0B0] font-nunito-semibold-italic text-sm">Confirm New Password</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`border-[#DDDDDD] focus:ring-brand/20 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  placeholder="Confirm your new password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <Space size={4} />

            <Button
              type="submit"
              className='bg-linear-to-bl to-brand from-[#B08D59] text-white px-4 py-2 rounded-md'
            >
              Update Password
            </Button>
          </form>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default ChangePassword

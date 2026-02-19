import { useState } from 'react'
import FormalCard from '../../components/shared/cards/FormalCard'
import { PageContent, PageLayout } from '../../components/shared/PageLayout'
import { Button } from '../../components/ui/button'
import { Field, FieldError, FieldLabel } from '../../components/ui/field'
import { Input } from '../../components/ui/input'


interface FormData {
  fullName: string
  email: string
  phone: string
  password: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  password?: string
  general?: string
}

function AddNewClient() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.error('Form validation failed:', errors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const clientData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        password: formData.password
      }

      console.log('Adding new client with data:', clientData)

      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Client added successfully:', result)

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        password: ''
      })

      alert('Client added successfully! Invitation sent.')

    } catch (error) {
      console.error('Error adding client:', error)
      setErrors({
        general: error instanceof Error ? error.message : 'Failed to add client. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout title="Add New Client">
      <PageContent>
        <FormalCard header={
          <div>
            <h1 className='text-lg text-[#666666] font-nunito-semibold-italic'>Add New Client</h1>
            <p className='text-sm text-[#B0B0B0] font-nunito-semibold-italic'>Create a new client account and provide secure access to the platform.</p>
          </div>
        }>
          <form className='space-y-4' onSubmit={handleSubmit}>
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {errors.general}
              </div>
            )}

            <div className="responsive-grid-2">
              <Field>
                <FieldLabel htmlFor="client_name">Full Name</FieldLabel>
                <Input
                  id="client_name"
                  placeholder='Enter full name'
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.fullName}
                />
                <FieldError errors={errors.fullName ? [{ message: errors.fullName }] : []} />
              </Field>

              <Field>
                <FieldLabel htmlFor="client_email">Email</FieldLabel>
                <Input
                  id="client_email"
                  type="email"
                  placeholder='Enter email'
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                />
                <FieldError errors={errors.email ? [{ message: errors.email }] : []} />
              </Field>

              <Field>
                <FieldLabel htmlFor="client_phone">Phone Number</FieldLabel>
                <Input
                  id="client_phone"
                  placeholder='Enter phone number'
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                />
                <FieldError errors={errors.phone ? [{ message: errors.phone }] : []} />
              </Field>

              <Field>
                <FieldLabel htmlFor="client_password">Password</FieldLabel>
                <Input
                  id="client_password"
                  type="password"
                  placeholder='Enter password'
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.password}
                />
                <FieldError errors={errors.password ? [{ message: errors.password }] : []} />
              </Field>
            </div>

            <Button
              className='bg-brand hover:bg-brand'
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding Client...' : 'Add & Send Invitation'}
            </Button>
          </form>
        </FormalCard>
      </PageContent>
    </PageLayout>
  )
}

export default AddNewClient

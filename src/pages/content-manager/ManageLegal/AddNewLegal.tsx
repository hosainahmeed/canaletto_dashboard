import { ImageAdd02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRef, useState } from 'react'
import JoditComponent from '../../../components/shared/JoditComponent'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { Field, FieldLabel } from '../../../components/ui/field'
import { Input } from '../../../components/ui/input'

const AddNewLegal = () => {
  const [content, setContent] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [errors, setErrors] = useState<{ title?: string; images?: string; content?: string }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setImages((prev) => [...prev, result])
        }
        reader.readAsDataURL(file)
      }
    })

    // Reset the input value to allow uploading the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index))
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const validateForm = () => {
    const newErrors: { title?: string; images?: string; content?: string } = {}

    if (!title.trim()) {
      newErrors.title = 'Legal title is required'
    }

    if (images.length === 0) {
      newErrors.images = 'At least one image is required'
    }

    if (!content.trim()) {
      newErrors.content = 'Legal description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSavePost = () => {
    if (validateForm()) {
      // Convert base64 images back to File objects for logging
      const imageFiles = images.map((base64String, index) => {
        // Extract the base64 data and create a File object
        const base64Data = base64String.split(',')[1]
        const byteCharacters = atob(base64Data)
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'image/jpeg' })
        return new File([blob], `legal_image_${index + 1}.jpg`, { type: 'image/jpeg' })
      })

      console.log('Legal Update Data:')
      console.log('legal_image=', imageFiles)
      console.log('legal_title=', title)
      console.log('legal_description=', content)

      // Clear form data after successful submission
      setTitle('')
      setContent('')
      setImages([])
      setErrors({})

      // Here you would typically send the data to your API
      alert('Legal update saved successfully!')
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className="">
      <PageLayout title="Add Legal Update">
        <PageContent>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 italic font-nunito-semibold-italic">Add Update Legal Update</h2>
              <p className="text-sm text-gray-400 mt-1 italic">Create Legal Insights</p>
            </div>

            <div className="p-10 space-y-10">
              {/* Upload Images Section */}
              <Field >
                <FieldLabel className="text-base font-medium text-gray-600 block">Upload Images</FieldLabel>
                {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images}</p>}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div
                  onClick={handleUploadClick}
                  className="border-2 border-brand/50 rounded-2xl p-6 flex items-center justify-center gap-4 cursor-pointer hover:border-brand/40 hover:bg-brand/5 transition-all group"
                >
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-brand/10 transition-colors">
                    <HugeiconsIcon icon={ImageAdd02Icon} size={28} className="text-gray-400 group-hover:text-brand transition-colors" />
                  </div>
                  <span className="text-base text-gray-400 group-hover:text-brand/70 font-medium">Upload Images Here</span>
                </div>

                {/* Image Previews */}
                <div className="flex flex-wrap gap-5 mt-6">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative group w-32 h-24 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <button
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                      >
                        <span className="text-white font-bold text-sm">×</span>
                      </button>
                    </div>
                  ))}
                </div>
              </Field>

              {/* Title Input */}
              <Field >
                <FieldLabel className="text-base font-medium text-gray-600 block">Legal Update Tittle</FieldLabel>
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Legal Update Tittle"
                  className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                />
              </Field>

              {/* Description Section */}
              <Field >
                <FieldLabel className="text-base font-medium text-gray-600 block">Legal Update Description</FieldLabel>
                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                <div >
                  <JoditComponent content={content} setContent={setContent} />
                </div>
              </Field>

              {/* Save Button */}
              <div className="pt-6">
                <Button
                  onClick={handleSavePost}
                  className="bg-brand hover:opacity-90 hover:bg-brand text-white px-10  h-auto text-base font-semibold shadow-lg shadow-brand/20 transition-all active:scale-[0.98]"
                >
                  Save The Post
                </Button>
              </div>
            </div>
          </div>
        </PageContent>
      </PageLayout>
    </div>
  )
}

export default AddNewLegal
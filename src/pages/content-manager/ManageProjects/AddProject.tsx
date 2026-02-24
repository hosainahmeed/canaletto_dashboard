import { ImageAdd02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useRef, useState } from 'react'
import JoditComponent from '../../../components/shared/JoditComponent'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import { Button } from '../../../components/ui/button'
import { Field, FieldLabel } from '../../../components/ui/field'
import { Input } from '../../../components/ui/input'

const AddProject = () => {
  const [content, setContent] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [title, setTitle] = useState('')
  const [propertySize, setPropertySize] = useState('')
  const [numberOfRooms, setNumberOfRooms] = useState('')
  const [typeOfUse, setTypeOfUse] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [totalUnits, setTotalUnits] = useState('')
  const [propertyLocation, setPropertyLocation] = useState('')
  const [startingPrice, setStartingPrice] = useState('')
  const [paymentPlan, setPaymentPlan] = useState('')
  const [investmentOptions, setInvestmentOptions] = useState('')
  const [handoverYear, setHandoverYear] = useState('')
  const [installments, setInstallments] = useState('')
  const [errors, setErrors] = useState<{
    title?: string;
    images?: string;
    content?: string;
    propertySize?: string;
    numberOfRooms?: string;
    typeOfUse?: string;
    propertyType?: string;
    totalUnits?: string;
    propertyLocation?: string;
    startingPrice?: string;
    paymentPlan?: string;
    investmentOptions?: string;
    handoverYear?: string;
    installments?: string;
  }>({})
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
    const newErrors: {
      title?: string;
      images?: string;
      content?: string;
      propertySize?: string;
      numberOfRooms?: string;
      typeOfUse?: string;
      propertyType?: string;
      totalUnits?: string;
      propertyLocation?: string;
      startingPrice?: string;
      paymentPlan?: string;
      investmentOptions?: string;
      handoverYear?: string;
      installments?: string;
    } = {}

    if (!title.trim()) {
      newErrors.title = 'Project title is required'
    }

    if (images.length === 0) {
      newErrors.images = 'At least one image is required'
    }

    if (!content.trim()) {
      newErrors.content = 'Project description is required'
    }

    if (!propertySize.trim()) {
      newErrors.propertySize = 'Property size is required'
    }

    if (!numberOfRooms.trim()) {
      newErrors.numberOfRooms = 'Number of rooms is required'
    }

    if (!typeOfUse) {
      newErrors.typeOfUse = 'Type of use is required'
    }

    if (!propertyType) {
      newErrors.propertyType = 'Property type is required'
    }

    if (!totalUnits.trim()) {
      newErrors.totalUnits = 'Total units is required'
    }

    if (!propertyLocation.trim()) {
      newErrors.propertyLocation = 'Property location is required'
    }

    if (!startingPrice.trim()) {
      newErrors.startingPrice = 'Starting price is required'
    }

    if (!paymentPlan.trim()) {
      newErrors.paymentPlan = 'Payment plan is required'
    }

    if (!investmentOptions.trim()) {
      newErrors.investmentOptions = 'Investment options are required'
    }

    if (!handoverYear.trim()) {
      newErrors.handoverYear = 'Handover year is required'
    }

    if (!installments.trim()) {
      newErrors.installments = 'Installments are required'
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
        return new File([blob], `project_image_${index + 1}.jpg`, { type: 'image/jpeg' })
      })

      console.log('Project Update Data:')
      console.log('project_image=', imageFiles)
      console.log('project_title=', title)
      console.log('project_description=', content)
      console.log('property_size=', propertySize)
      console.log('number_of_rooms=', numberOfRooms)
      console.log('type_of_use=', typeOfUse)
      console.log('property_type=', propertyType)
      console.log('total_units=', totalUnits)
      console.log('property_location=', propertyLocation)
      console.log('starting_price=', startingPrice)
      console.log('payment_plan=', paymentPlan)
      console.log('investment_options=', investmentOptions)
      console.log('handover_year=', handoverYear)
      console.log('installments=', installments)

      // Clear form data after successful submission
      setTitle('')
      setContent('')
      setImages([])
      setPropertySize('')
      setNumberOfRooms('')
      setTypeOfUse('')
      setPropertyType('')
      setTotalUnits('')
      setPropertyLocation('')
      setStartingPrice('')
      setPaymentPlan('')
      setInvestmentOptions('')
      setHandoverYear('')
      setInstallments('')
      setErrors({})

      // Here you would typically send the data to your API
      alert('Project saved successfully!')
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className="">
      <PageLayout title="Add new project">
        <PageContent>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 italic font-nunito-semibold-italic">Add Or Update New Project</h2>
              <p className="text-sm text-gray-400 mt-1 italic">Create or Edit New Project Announcements</p>
            </div>

            <div className="p-10 space-y-10">
              {/* Upload Images Section - Full Width */}
              <Field >
                <FieldLabel className="text-base font-medium text-gray-600 block">Upload Property Images</FieldLabel>
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

              {/* Two Column Grid for Other Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Title Input */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">New Project Title</FieldLabel>
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Project Title"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Property Size */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Property Size</FieldLabel>
                  {errors.propertySize && <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>}
                  <Input
                    value={propertySize}
                    onChange={(e) => setPropertySize(e.target.value)}
                    placeholder="Enter the property size in square meters."
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Number of Rooms */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Number of Rooms</FieldLabel>
                  {errors.numberOfRooms && <p className="text-red-500 text-sm mt-1">{errors.numberOfRooms}</p>}
                  <Input
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    placeholder="Enter number of rooms"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Type of Use */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Type of Use</FieldLabel>
                  {errors.typeOfUse && <p className="text-red-500 text-sm mt-1">{errors.typeOfUse}</p>}
                  <Input
                    value={typeOfUse}
                    onChange={(e) => setTypeOfUse(e.target.value)}
                    placeholder="Enter type of use"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Property Type */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Property Type</FieldLabel>
                  {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
                  <Input
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    placeholder="Enter property type"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Total Units */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Total Units</FieldLabel>
                  {errors.totalUnits && <p className="text-red-500 text-sm mt-1">{errors.totalUnits}</p>}
                  <Input
                    value={totalUnits}
                    onChange={(e) => setTotalUnits(e.target.value)}
                    placeholder="Enter total units"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Property Location */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Property Location</FieldLabel>
                  {errors.propertyLocation && <p className="text-red-500 text-sm mt-1">{errors.propertyLocation}</p>}
                  <Input
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    placeholder="Enter property location"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Starting Price */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Starting Price</FieldLabel>
                  {errors.startingPrice && <p className="text-red-500 text-sm mt-1">{errors.startingPrice}</p>}
                  <Input
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                    placeholder="Enter starting price"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Payment Plan */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Payment Plan</FieldLabel>
                  {errors.paymentPlan && <p className="text-red-500 text-sm mt-1">{errors.paymentPlan}</p>}
                  <Input
                    value={paymentPlan}
                    onChange={(e) => setPaymentPlan(e.target.value)}
                    placeholder="Enter payment plan"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Investment Options */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Investment Options</FieldLabel>
                  {errors.investmentOptions && <p className="text-red-500 text-sm mt-1">{errors.investmentOptions}</p>}
                  <Input
                    value={investmentOptions}
                    onChange={(e) => setInvestmentOptions(e.target.value)}
                    placeholder="Enter investment options"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Handover Year */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Handover Year</FieldLabel>
                  {errors.handoverYear && <p className="text-red-500 text-sm mt-1">{errors.handoverYear}</p>}
                  <Input
                    value={handoverYear}
                    onChange={(e) => setHandoverYear(e.target.value)}
                    placeholder="Enter handover year"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>

                {/* Installments */}
                <Field >
                  <FieldLabel className="text-base font-medium text-gray-600 block">Installments</FieldLabel>
                  {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
                  <Input
                    value={installments}
                    onChange={(e) => setInstallments(e.target.value)}
                    placeholder="Enter installments"
                    className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                  />
                </Field>
              </div>

              {/* Project Description - Full Width */}
              <Field >
                <FieldLabel className="text-base font-medium text-gray-600 block">Project Description</FieldLabel>
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
                  Save Property
                </Button>
              </div>
            </div>
          </div>
        </PageContent>
      </PageLayout>
    </div>
  )
}
export default AddProject

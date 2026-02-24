import { AddSquareIcon, ImageAdd02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, useState } from "react";
import JoditComponent from "../../../components/shared/JoditComponent";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import { Button } from "../../../components/ui/button";
import { Field, FieldLabel } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const AddLifeStyle = () => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [lifestyleType, setLifestyleType] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [officialSite, setOfficialSite] = useState("");
  const [goodToKnow, setGoodToKnow] = useState<string[]>(["", "", ""]);
  const [errors, setErrors] = useState<{
    title?: string;
    images?: string;
    content?: string;
    lifestyleType?: string;
    rating?: string;
    location?: string;
    officialSite?: string;
  }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setImages((prev) => [...prev, result]);
        };
        reader.readAsDataURL(file);
      }
    });

    // Reset the input value to allow uploading the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers and decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Ensure only one decimal point
    const parts = numericValue.split('.');
    if (parts.length > 2) {
      return; // Invalid input with multiple decimal points
    }

    // Check if value is within range (0 to 5)
    const numValue = parseFloat(numericValue);
    if (numericValue === '' || (numValue >= 0 && numValue <= 5)) {
      setRating(numericValue);
    }
  };

  const handleGoodToKnowChange = (index: number, value: string) => {
    const newGoodToKnow = [...goodToKnow];
    newGoodToKnow[index] = value;
    setGoodToKnow(newGoodToKnow);
  };

  const addGoodToKnowField = () => {
    setGoodToKnow([...goodToKnow, ""]);
  };

  const removeGoodToKnowField = (index: number) => {
    if (goodToKnow.length > 1) {
      setGoodToKnow(goodToKnow.filter((_, idx) => idx !== index));
    }
  };

  const validateForm = () => {
    const newErrors: {
      title?: string;
      images?: string;
      content?: string;
      lifestyleType?: string;
      rating?: string;
      location?: string;
      officialSite?: string;
    } = {};

    if (!title.trim()) {
      newErrors.title = 'Lifestyle title is required';
    }

    if (images.length === 0) {
      newErrors.images = 'At least one image is required';
    }

    if (!content.trim()) {
      newErrors.content = 'Lifestyle description is required';
    }

    if (!lifestyleType) {
      newErrors.lifestyleType = 'Lifestyle type is required';
    }

    if (!rating.trim()) {
      newErrors.rating = 'Lifestyle rating is required';
    }

    if (!location.trim()) {
      newErrors.location = 'Lifestyle location is required';
    }

    if (!officialSite.trim()) {
      newErrors.officialSite = 'Official site is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSavePost = () => {
    if (validateForm()) {
      // Convert base64 images back to File objects for logging
      const imageFiles = images.map((base64String, index) => {
        // Extract the base64 data and create a File object
        const base64Data = base64String.split(',')[1];
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });
        return new File([blob], `lifestyle_image_${index + 1}.jpg`, { type: 'image/jpeg' });
      });

      const filteredGoodToKnow = goodToKnow.filter(item => item.trim() !== '');

      console.log('Lifestyle Update Data:');
      console.log('lifestyle_image=', imageFiles);
      console.log('lifestyle_title=', title);
      console.log('lifestyle_description=', content);
      console.log('lifestyle_type=', lifestyleType);
      console.log('lifestyle_rating=', rating);
      console.log('lifestyle_location=', location);
      console.log('lifestyle_official_site=', officialSite);
      console.log('lifestyle_good_to_know=', filteredGoodToKnow);

      // Clear form data after successful submission
      setTitle('');
      setContent('');
      setImages([]);
      setLifestyleType('');
      setRating('');
      setLocation('');
      setOfficialSite('');
      setGoodToKnow(['', '', '']);
      setErrors({});

      // Here you would typically send the data to your API
      alert('Lifestyle update saved successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="">
      <PageLayout title="Add Lifestyle Update">
        <PageContent>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 italic font-nunito-semibold-italic">
                Add LifeStyle Details
              </h2>
              <p className="text-sm text-gray-400 mt-1 italic">
                Create Lifestyle Details
              </p>
            </div>

            <div className="p-4 space-y-10">
              {/* Upload Images Section */}
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  * Upload Images
                </FieldLabel>
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
                    <HugeiconsIcon
                      icon={ImageAdd02Icon}
                      size={28}
                      className="text-gray-400 group-hover:text-brand transition-colors"
                    />
                  </div>
                  <span className="text-base text-gray-400 group-hover:text-brand/70 font-medium">
                    Upload Images Here
                  </span>
                </div>

                {/* Image Previews */}
                <div className="flex flex-wrap gap-5 mt-6">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative group w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={img}
                        alt={`Preview ${idx}`}
                        className="w-full h-full object-cover"
                      />
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
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  * Lifestyle Tittle
                </FieldLabel>
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Lifestyle Tittle"
                  className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                />
              </Field>

              {/* first */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="w-full h-full">
                  <FieldLabel className="text-base font-medium mb-3 text-gray-600 block">
                    * Lifestyle Type
                  </FieldLabel>
                  {errors.lifestyleType && <p className="text-red-500 text-sm mt-1">{errors.lifestyleType}</p>}
                  <Select value={lifestyleType} onValueChange={setLifestyleType}>
                    <SelectTrigger className="w-full h-14.5! bg-white border-gray-200 px-6 flex items-center">
                      <SelectValue placeholder="Select Lifestyle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="24h">Last 24 Hours</SelectItem>
                        <SelectItem value="week">Last Week</SelectItem>
                        <SelectItem value="month">Last Month</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      * Lifestyle Rating
                    </FieldLabel>
                    {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                    <Input
                      value={rating}
                      onChange={handleRatingChange}
                      placeholder="Enter Lifestyle Rating"
                      className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                    />
                  </Field>
                </div>
              </div>
              {/* second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      * Lifestyle Location
                    </FieldLabel>
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter Lifestyle Location "
                      className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                    />
                  </Field>
                </div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      *  Official site for visit
                    </FieldLabel>
                    {errors.officialSite && <p className="text-red-500 text-sm mt-1">{errors.officialSite}</p>}
                    <Input
                      value={officialSite}
                      onChange={(e) => setOfficialSite(e.target.value)}
                      placeholder="Enter Official site for visit"
                      className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                    />
                  </Field>
                </div>
              </div>

              {/* Description Section */}
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  * About Lifestyle{" "}
                </FieldLabel>
                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                <div>
                  <JoditComponent content={content} setContent={setContent} />
                </div>
              </Field>

              <div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      * Good to Know
                    </FieldLabel>
                    <div className="flex flex-col gap-2 w-full">
                      {goodToKnow.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 w-full">
                          <div className="w-full">
                            <Input
                              value={item}
                              onChange={(e) => handleGoodToKnowChange(index, e.target.value)}
                              placeholder="Add Lifestyle Features That Will Engage and Interest Your Audience "
                              className="h-14 bg-white w-full border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                            />
                          </div>

                          <button
                            onClick={() => addGoodToKnowField()}
                            className="w-12 h-12 flex items-center justify-center bg-brand text-white rounded-md cursor-pointer transition-colors"
                          >
                            <HugeiconsIcon size={20} icon={AddSquareIcon} />
                          </button>
                          {goodToKnow.length > 1 && (
                            <button
                              onClick={() => removeGoodToKnowField(index)}
                              className="p-4 w-12 h-12 flex items-center justify-center bg-red-500 text-white cursor-pointer rounded-md hover:bg-red-600 transition-colors"
                            >
                              <span className="text-white font-bold text-sm">×</span>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                  </Field>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6">
                <Button
                  onClick={handleSavePost}
                  className="bg-brand hover:opacity-90 text-white px-10  h-auto text-base font-semibold shadow-lg shadow-brand/20 transition-all active:scale-[0.98]"
                >
                  Add Lifestyle
                </Button>
              </div>
            </div>
          </div>
        </PageContent>
      </PageLayout>
    </div>
  );
};

export default AddLifeStyle;

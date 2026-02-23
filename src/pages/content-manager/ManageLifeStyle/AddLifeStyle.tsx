import { ImageAdd02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import JoditComponent from "../../../components/shared/JoditComponent";
import { PageContent, PageLayout } from "../../../components/shared/PageLayout";
import { Button } from "../../../components/ui/button";
import { Field, FieldLabel } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import plusIcon from "../../../assets/Frame (1).svg";
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

  const [images] = useState<string[]>([
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop",
  ]);

  return (
    <div className="">
      <PageLayout title="Update Legal Update">
        <PageContent>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 italic font-nunito-semibold-italic">
                Update LifeStyle Details
              </h2>
              <p className="text-sm text-gray-400 mt-1 italic">
                Edit Legal Lifestyles Details
              </p>
            </div>

            <div className="p-4 space-y-10">
              {/* Upload Images Section */}
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  Upload Images
                </FieldLabel>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-brand/40 hover:bg-brand/5 transition-all group">
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
                    </div>
                  ))}
                </div>
              </Field>

              {/* Title Input */}
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  Lifestyle Tittle
                </FieldLabel>
                <Input
                  placeholder="Enter Lifestyle Tittle"
                  className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                />
              </Field>

              {/* first */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="w-full">
                  <FieldLabel className="text-base font-medium text-gray-600 block">
                    Lifestyle Type
                  </FieldLabel>
                  <Select>
                    <SelectTrigger className="w-full h-14 bg-white border-gray-200 px-6 flex items-center">
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
                      Lifestyle Rating
                    </FieldLabel>
                    <Input
                      placeholder="Enter Lifestyle Rating "
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
                      Lifestyle Location
                    </FieldLabel>
                    <Input
                      placeholder="Enter Lifestyle Location "
                      className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                    />
                  </Field>
                </div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      Official site for visit
                    </FieldLabel>
                    <Input
                      placeholder="Enter Official site for visit"
                      className="h-14 bg-white border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                    />
                  </Field>
                </div>
              </div>

              {/* Description Section */}
              <Field>
                <FieldLabel className="text-base font-medium text-gray-600 block">
                  About Lifestyle{" "}
                </FieldLabel>
                <div>
                  <JoditComponent content={content} setContent={setContent} />
                </div>
              </Field>

              <div>
                <div className="w-full">
                  <Field>
                    <FieldLabel className="text-base font-medium text-gray-600 block">
                      Good to Know
                    </FieldLabel>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 w-full">
                        <div className="w-full">
                          <Input
                            placeholder="Add Lifestyle Features That Will Engage and Interest Your Audience "
                            className="h-14 bg-white w-full border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                          />
                        </div>
                        <div>
                          <img src={plusIcon} alt="" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full">
                        <div className="w-full">
                          <Input
                            placeholder="Add Lifestyle Features That Will Engage and Interest Your Audience "
                            className="h-14 bg-white w-full border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                          />
                        </div>
                        <div>
                          <img src={plusIcon} alt="" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full md:col-span-2">
                        <div className="w-full">
                          <Input
                            placeholder="Add Lifestyle Features That Will Engage and Interest Your Audience"
                            className="h-14 bg-white w-full border-gray-200 focus:ring-brand focus:border-brand  px-6 text-base"
                          />
                        </div>
                        <div>
                          <img src={plusIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    
                  </Field>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6">
                <Button className="bg-brand hover:opacity-90 text-white px-10  h-auto text-base font-semibold shadow-lg shadow-brand/20 transition-all active:scale-[0.98]">
                  Add Property
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

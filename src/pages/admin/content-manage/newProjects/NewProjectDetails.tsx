import FormalCard from "../../../../components/shared/cards/FormalCard";
import ImageGallery from "../../../../components/shared/imageComponents/ImageGallery";
import { PageLayout } from "../../../../components/shared/PageLayout";
import InterestedClients from "./InterestedClients";

function NewProjectDetails() {
  const new_project_details = {
    port_title: "Dubai Property Prices Rise in Q1 2026",
    post_on: "27 Aug 2026",
    post_by: "Lena Fischer",
  };

  const lifestyle_update_Info = {
    Property_Size: "from 270 sqm",
    Rooms: "from 3-bedroom",
    Type_of_Use: "Residential Living",
    Property_Type: "Villas",
    Units: "900 Units",
    Property_Location: "Abu Dhabi, Al Hudayriat Island, Bashayer Villas",
  };

  const Project_Information = {
    Starting_Price: "AED 1.45M",
    Payment_Plan: "65 / 35",
    Investment_Options: "Installments",
    Handover_Year: "Jan 2028",
  };

  return (
    <PageLayout title="New Projects">
      <div className="space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Image Gallery */}
          <div className="lg:col-span-1">
            <ImageGallery
              images={[
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
              ]}
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <FormalCard header="New Project Details">
              <div className="space-y-5">
                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Post Title
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {new_project_details.port_title}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Posted On
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {new_project_details.post_on}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Posted By
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {new_project_details.post_by}
                  </p>
                </div>
              </div>
            </FormalCard>
          </div>
        </div>

        {/* About info */}
        <div className="lg:col-span-3">
          <FormalCard
            header="About Project"
            headerStyle="font-nunito-semibold-italic"
          >
            <div className="w-full p-4">
              {/* 2 COLUMN LAYOUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Post Size
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Property_Size}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Rooms
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Rooms}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Type of Use
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Type_of_Use}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Property Type
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Property_Type}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Units
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Units}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Property Location
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {lifestyle_update_Info.Property_Location}
                  </p>
                </div>
              </div>
            </div>
          </FormalCard>
        </div>

        {/* Project Information */}
        <div className="lg:col-span-3">
          <FormalCard
            header="Project Information"
            headerStyle="font-nunito-semibold-italic"
          >
            <div className="w-full p-4">
              {/* SAME 2 COLUMN LAYOUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Starting Price
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {Project_Information.Starting_Price}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Payment Plan
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {Project_Information.Payment_Plan}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Investment Options
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {Project_Information.Investment_Options}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Handover Year
                  </h3>
                  <p className="text-gray-700 font-medium mt-1">
                    {Project_Information.Handover_Year}
                  </p>
                </div>
              </div>
            </div>
          </FormalCard>
        </div>

        <div>
            <InterestedClients/>
        </div>
      </div>
    </PageLayout>
  );
}

export default NewProjectDetails;

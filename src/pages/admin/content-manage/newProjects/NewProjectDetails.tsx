import FormalCard from "../../../../components/shared/cards/FormalCard";
import ImageGallery from "../../../../components/shared/imageComponents/ImageGallery";
import { PageLayout } from "../../../../components/shared/PageLayout";

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


          {/* Lifestyle info */}
          <div className="lg:col-span-3">
            <FormalCard
              header="About Project"
              headerStyle="font-nunito-semibold-italic"
            >
              <div className="max-w-6xl w-full p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Post Size
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Property_Size}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Rooms
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Rooms}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Type of Use
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Type_of_Use}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Property Type
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Property_Type}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Units
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Units}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Property Location
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Property_Location}
                    </p>
                  </div>
                </div>
              </div>
            </FormalCard>
          </div>


           {/* Lifestyle info */}
          <div className="lg:col-span-3">
            <FormalCard
              header="Lifestyle Info."
              headerStyle="font-nunito-semibold-italic"
            >
              <div className="space-y-5 flex flex-col justify-between gap-2 max-w-5xl md:flex-col lg:flex-row">
                <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Starting Price
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {Project_Information.Starting_Price}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Payment Plan
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {Project_Information.Payment_Plan}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Investment Options
                    </h3>
                    <div className="flex items-center">
                      
                      <p className="text-gray-700 font-medium">
                        {Project_Information.Investment_Options}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                     Handover Year
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {Project_Information.Handover_Year}
                    </p>
                  </div>
                </div>
              </div>
            </FormalCard>
          </div>


        {/* Description */}
        <FormalCard
          header="New Project Description"
          headerStyle="font-nunito-semibold-italic"
        >
          <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
            Dubai’s real estate market has continued to demonstrate strong and
            stable growth in early 2026, supported by sustained investor
            confidence, attractive payment plans, and ongoing infrastructure
            development across key areas of the city...
          </p>
        </FormalCard>
      </div>
    </PageLayout>
  );
}

export default NewProjectDetails;

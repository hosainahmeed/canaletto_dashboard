import { Star } from "lucide-react";
import FormalCard from "../../../../components/shared/cards/FormalCard";
import ImageGallery from "../../../../components/shared/imageComponents/ImageGallery";
import { PageLayout } from "../../../../components/shared/PageLayout";
import starImage from "../../../../assets/Vector.png";
import chkImage from "../../../../assets/Frame (1).png";

function LifestyleUpdateDetails() {
  const lifestyle_update_details = {
    Lifestyle_title: "Dubai Property Prices Rise in Q1 2026",
    posted_on: "Abu Dhabi, Al Hudayriat Island, Bashayer Villas",
    post_by: "Lena Fischer",
  };
  const lifestyle_update_Info = {
    Lifestyle_Type: "Dubai Property Prices Rise in Q1 2026",
    lifestyle_location: "Abu Dhabi, Al Hudayriat Island, Bashayer Villas",
    lifestyle_rating: "4",
    Official_site_for_visit: "http://www.canalettosky.com",
  };

  return (
    <PageLayout title="Lifestyle Update Details ">
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
            <FormalCard header="Lifestyle Update Details">
              <div className="space-y-5">
                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Post Title
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {lifestyle_update_details.Lifestyle_title}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Posted On
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {lifestyle_update_details.posted_on}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Posted By
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {lifestyle_update_details.post_by}
                  </p>
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
                      Post Title
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Lifestyle_Type}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Lifestyle Location
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.lifestyle_location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Lifestyle Rating
                    </h3>
                    <div className="flex items-center">
                      <img
                        src={starImage}
                        alt="Star Rating"
                        className="w-4 h-4 mr-1"
                      />
                      <p className="text-gray-700 font-medium">
                        {lifestyle_update_Info.lifestyle_rating}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Official Site for Visit
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {lifestyle_update_Info.Official_site_for_visit}
                    </p>
                  </div>
                </div>
              </div>
            </FormalCard>
          </div>
        </div>

        {/* Description */}
        <FormalCard
          header="Lifestyle Update Description"
          headerStyle="font-nunito-semibold-italic"
        >
          <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
            Dubai’s real estate market has continued to demonstrate strong and
            stable growth in early 2026, supported by sustained investor
            confidence, attractive payment plans, and ongoing infrastructure
            development across key areas of the city...
          </p>
        </FormalCard>
        {/* Good to know */}
        <FormalCard
          header="Lifestyle Update Good to Know"
          headerStyle="font-nunito-semibold-italic"
        >
          <div className="glex flex-col gap-4">
            <div className="flex items-center gap-1">
              <img src={chkImage} alt="Checkmark" />
              <p className="text-[#666666] ">Best Time to Visit</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={chkImage} alt="Checkmark" />
              <p className="text-[#666666]">
                Smart casual / Beachwear at pool area
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src={chkImage} alt="Checkmark" />
              <p className="text-[#666666]">Yes, advance booking recommended</p>
            </div>
          </div>
        </FormalCard>
      </div>
    </PageLayout>
  );
}

export default LifestyleUpdateDetails;

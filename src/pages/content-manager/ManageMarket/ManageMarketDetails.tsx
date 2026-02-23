import { Link, useNavigate } from "react-router-dom";
import { LockPasswordIcon, UserEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import InterestedClients from "../../../assets/Image.svg";
import { PageLayout } from "../../../components/shared/PageLayout";
import ImageGallery from "../../../components/shared/imageComponents/ImageGallery";
import FormalCard from "../../../components/shared/cards/FormalCard";
import { Button } from "../../../components/ui/button";

function ManageMarketDetails() {
  const navigate = useNavigate();
  const market_update_details = {
    port_title: "Dubai Property Prices Rise in Q1 2026",
    post_on: "27 Aug 2026",
    post_by: "Lena Fischer",
  };

  return (
    <PageLayout title="Manage Market Details">
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
            <FormalCard header="Market Update Details">
              <div className="space-y-5">
                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Post Title
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {market_update_details.port_title}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                    Posted On
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {market_update_details.post_on}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-[#B0B0B0] text-sm font-nunito-semibold-italic">
                      Posted By
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {market_update_details.post_by}
                    </p>
                  </div>

                  <div>
                    <Link
                      to="/content-manager/manage-markets/profile/:id"
                      className="text-blue-500 hover:underline"
                    >
                      <img
                        src={InterestedClients}
                        alt="Back to Market Updates"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </FormalCard>
          </div>
        </div>

        {/* Description */}
        <FormalCard
          header="Market Update Description"
          headerStyle="font-nunito-semibold-italic"
        >
          <p className="text-[#666666] leading-relaxed text-sm sm:text-base">
            Dubai’s real estate market has continued to demonstrate strong and
            stable growth in early 2026, supported by sustained investor
            confidence, attractive payment plans, and ongoing infrastructure
            development across key areas of the city...
          </p>
        </FormalCard>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              navigate("/support-manager/profile/update-profile");
            }}
            className="bg-linear-to-bl to-brand from-[#B08D59]"
          >
            <HugeiconsIcon icon={UserEdit01Icon} />
            Update this post{" "}
          </Button>
          <Button
            onClick={() => {
              navigate("/support-manager/profile/change-password");
            }}
            className="bg-linear-to-bl to-red-900 from-red-500"
          >
            <HugeiconsIcon icon={LockPasswordIcon} />
            delete this Post
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

export default ManageMarketDetails;

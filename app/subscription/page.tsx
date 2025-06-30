import { MembershipTiers } from "@/components/membership-tiers";
import PageIllustration from "@/components/page-illustration";
import { Sparkles, Award, CheckCircle2 } from "lucide-react";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-navy-gradient pb-16">
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full blur-md bg-blue-500/20"></div>
                <div className="relative bg-blue-600/20 rounded-full p-2">
                  <Award className="h-8 w-8 text-blue-400" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Membership Plans
            </h1>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              Choose the perfect membership plan to accelerate your fitness
              journey and unlock exclusive benefits.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Expert Guidance
                </h3>
                <p className="text-blue-200">
                  Access to certified trainers who will help you achieve your
                  fitness goals
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Premium Equipment
                </h3>
                <p className="text-blue-200">
                  State-of-the-art fitness equipment and facilities for optimal
                  workouts
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Exclusive Perks
                </h3>
                <p className="text-blue-200">
                  Special discounts on supplements, apparel, and partner
                  services
                </p>
              </div>
            </div>
          </div>

          {/* Membership Tiers */}
          <MembershipTiers />

          {/* FAQ Section */}
          
          <div className="mt-20 relative">
            <PageIllustration />
            <h2 className="text-2xl font-bold mb-8 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Can I cancel my membership anytime?
                </h3>
                <p className="text-blue-200">
                  Yes, you can cancel your monthly subscription anytime. For
                  quarterly and yearly plans, you can request a prorated refund
                  for the unused period after a 30-day minimum commitment.
                </p>
              </div>

              <div className="p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  How do I upgrade my membership?
                </h3>
                <p className="text-blue-200">
                  You can upgrade your membership at any time from your account
                  dashboard. The price difference will be prorated based on your
                  remaining subscription period.
                </p>
              </div>

              <div className="p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Are there any hidden fees?
                </h3>
                <p className="text-blue-200">
                  No, the price you see is the price you pay. There are no
                  additional registration fees, maintenance fees, or hidden
                  charges.
                </p>
              </div>

              <div className="p-6 bg-navy-800/50 backdrop-blur-sm rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Can I freeze my membership?
                </h3>
                <p className="text-blue-200">
                  Gold and Professional members can freeze their membership for
                  up to 30 days per year at no additional cost. Basic members
                  can freeze for a small monthly fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

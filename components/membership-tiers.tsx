"use client";

import { useState } from "react";
import BlurShapedSvg from "@/public/images/blurred-shape.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import Image from 'next/image';

type BillingPeriod = "monthly" | "quarterly" | "yearly";

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
  buttonText: string;
  highlightColor: string;
  iconColor: string;
  borderColor: string;
  badgeColor: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description: "Essential features for beginners",
    monthlyPrice: 499,
    quarterlyPrice: 1399,
    yearlyPrice: 4999,
    features: [
      "Limited gym access (6 AM - 4 PM)",
      "Basic workout plans",
      "1 fitness assessment per quarter",
      "Access to group classes",
      "Locker room access",
      "Online workout tracking",
      "Standard customer support",
    ],
    buttonText: "Get Started",
    highlightColor: "from-blue-600/20 to-blue-800/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-900/30 hover:border-blue-700/50",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Gold",
    description: "Perfect for dedicated fitness enthusiasts",
    monthlyPrice: 999,
    quarterlyPrice: 2799,
    yearlyPrice: 9999,
    features: [
      "Full gym access (24/7)",
      "Personalized workout plans",
      "2 fitness assessments per quarter",
      "Nutrition guidance",
      "Priority access to group classes",
      "Free towel service",
      "Discounts on supplements (10%)",
      "Advanced workout tracking",
      "Priority customer support",
    ],
    popular: true,
    buttonText: "Become Gold Member",
    highlightColor: "from-yellow-600/20 to-yellow-800/5",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-900/30 hover:border-yellow-700/50",
    badgeColor: "bg-yellow-500",
  },
  {
    name: "Professional",
    description: "Ultimate fitness experience with premium benefits",
    monthlyPrice: 1499,
    quarterlyPrice: 4199,
    yearlyPrice: 14999,
    features: [
      "Premium gym access (24/7)",
      "Personalized workout & nutrition plans",
      "Unlimited fitness assessments",
      "2 personal training sessions per month",
      "Priority booking for all classes",
      "Free towel & locker service",
      "Discounts on supplements (20%)",
      "Exclusive access to premium events",
      "Guest passes (2 per month)",
      "Premium customer support",
      "Free body composition analysis",
    ],
    buttonText: "Go Professional",
    highlightColor: "from-purple-600/20 to-purple-800/5",
    iconColor: "text-purple-400",
    borderColor: "border-purple-900/30 hover:border-purple-700/50",
    badgeColor: "bg-purple-500",
  },
];

export function MembershipTiers() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const getPrice = (tier: PricingTier) => {
    switch (billingPeriod) {
      case "monthly":
        return tier.monthlyPrice;
      case "quarterly":
        return tier.quarterlyPrice;
      case "yearly":
        return tier.yearlyPrice;
    }
  };

  const getSavings = (tier: PricingTier) => {
    switch (billingPeriod) {
      case "monthly":
        return null;
      case "quarterly":
        return tier.monthlyPrice * 3 - tier.quarterlyPrice;
      case "yearly":
        return tier.monthlyPrice * 12 - tier.yearlyPrice;
    }
  };

  const getBillingLabel = () => {
    switch (billingPeriod) {
      case "monthly":
        return "month";
      case "quarterly":
        return "quarter";
      case "yearly":
        return "year";
    }
  };

  return (
    <div className="relative">
      {/* Billing Period Selector */}
      <div className="flex justify-center mb-10">
        <Tabs
          defaultValue="monthly"
          value={billingPeriod}
          onValueChange={(value) => setBillingPeriod(value as BillingPeriod)}
          className="w-full max-w-md">
          <TabsList className="grid grid-cols-3 bg-navy-800">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative overflow-hidden bg-navy-800/50 backdrop-blur-sm border-2 ${tier.borderColor} transition-all duration-300`}>
            {tier.popular && (
              <div className="absolute top-0 right-0">
                <div className="relative">
                  <div className="absolute -inset-1 blur-sm bg-yellow-500/20"></div>
                  <Badge className="m-2 bg-yellow-600 hover:bg-yellow-700">
                    Most Popular
                  </Badge>
                </div>
              </div>
            )}

            <div
              className={`h-1 w-full bg-gradient-to-r ${tier.highlightColor}`}></div>

            <CardHeader>
              <div className="flex items-center mb-2">
                {tier.popular ? (
                  <Star
                    className={`h-5 w-5 mr-2 ${tier.iconColor} fill-current`}
                  />
                ) : (
                  <Star className={`h-5 w-5 mr-2 ${tier.iconColor}`} />
                )}
                <CardTitle className="text-xl text-white">
                  {tier.name}
                </CardTitle>
              </div>
              <CardDescription className="text-blue-200">
                {tier.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    ₹{getPrice(tier).toLocaleString()}
                  </span>
                  <span className="text-sm text-blue-300 ml-2">
                    / {getBillingLabel()}
                  </span>
                </div>

                {getSavings(tier) && (
                  <div className="mt-1">
                    <Badge
                      variant="outline"
                      className="bg-green-900/20 text-green-400 border-green-800">
                      Save ₹{getSavings(tier)?.toLocaleString()}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {tier.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start">
                    <div
                      className={`p-0.5 rounded-full ${tier.badgeColor} mr-2 mt-1`}>
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full ${
                  tier.popular ? "bg-yellow-600 hover:bg-yellow-700" : ""
                }`}
                variant={tier.popular ? "default" : "outline"}>
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Image
          src={BlurShapedSvg}
          alt="blur shaped svg"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4 translate-y-80 opacity-50"
        />
      </div>
    </div>
  );
}

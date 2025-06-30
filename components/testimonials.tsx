"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Dumbbell, Building, Clipboard } from "lucide-react";
import Image from 'next/image';
import BackImage from '@/public/images/blurred-shape.svg'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Vishal Soni",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "The trainers are highly professional and very supportive. They helped me achieve my fitness goals faster than I expected.",
    trainerStars: 5,
    facilityStars: 4,
    personalTrainingStars: 5,
    equipmentStars: 4,
  },
  {
    id: 2,
    name: "Prachi Vijaykar",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "The gym has excellent facilities and modern equipment! The environment is always clean and motivating.",
    trainerStars: 4,
    facilityStars: 5,
    personalTrainingStars: 5,
    equipmentStars: 5,
  },
  {
    id: 3,
    name: "Mansi",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "A well-maintained gym with experienced trainers. The personalized workout plans have been transformative for my fitness journey.",
    trainerStars: 5,
    facilityStars: 5,
    personalTrainingStars: 5,
    equipmentStars: 4,
  },
  {
    id: 4,
    name: "Harshata Chaudhary",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "Great environment, but trainers could be more attentive. The equipment is top-notch and always well maintained.",
    trainerStars: 3,
    facilityStars: 5,
    personalTrainingStars: 4,
    equipmentStars: 5,
  },
  {
    id: 5,
    name: "Shreya Ji",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "I've tried many gyms, but this one stands out for its community feel and supportive atmosphere. The trainers really care about your progress.",
    trainerStars: 3,
    facilityStars: 5,
    personalTrainingStars: 4,
    equipmentStars: 5,
  },
  {
    id: 6,
    name: "Aditi Yadav",
    avatar: "/placeholder.svg?height=40&width=40",
    feedback:
      "The personal training sessions are worth every penny. My fitness has improved dramatically since joining this gym.",
    trainerStars: 3,
    facilityStars: 5,
    personalTrainingStars: 4,
    equipmentStars: 5,
  },
];

// Star Rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

type SortCategory =
  | "trainerStars"
  | "facilityStars"
  | "personalTrainingStars"
  | "equipmentStars";

const TestimonialSection = () => {
  const [sortBy, setSortBy] = useState<SortCategory>("trainerStars");
  const [newKey, setNewKey] = useState(0);

  const handleSort = (newSort: SortCategory) => {
    setSortBy(newSort);
    setNewKey((prev) => prev + 1);
    AOS.refresh();
  };

  const sortedTestimonials = [...testimonials].sort(
    (a, b) => b[sortBy] - a[sortBy]
  );

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-16 relative bg-gradient-to-b from-gray-900 to-gray-950">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true">
        <Image
          className="max-w-none"
          src={BackImage}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Section header */}

        <div
          className="text-center mb-12"
          data-aos="fade-down">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-red-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-red-200/50">
            <span className="inline-flex bg-linear-to-r from-yellow-600 to-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Member Experiences
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-yellow-100),var(--color-yellow-300),var(--color-amber-300),var(--color-yellow-500),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle font-semibold text-transparent md:text-4xl bold text-4xl">
            What Our Members Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our community about their transformative fitness journeys
            and experiences with our gym.
          </p>
        </div>

        {/* Sorting tabs - Desktop */}
        <div
          className="hidden md:block mb-10"
          data-aos="fade-up">
          <Tabs
            defaultValue="trainerStars"
            className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger
                value="trainerStars"
                onClick={() => handleSort("trainerStars")}
                className={`flex items-center gap-2 ${
                  sortBy === "trainerStars" ? "bg-red-600/20" : ""
                }`}>
                <User size={16} />
                <span>Trainers</span>
              </TabsTrigger>
              <TabsTrigger
                value="facilityStars"
                onClick={() => handleSort("facilityStars")}
                className={`flex items-center gap-2 ${
                  sortBy === "facilityStars" ? "bg-red-600/20" : ""
                }`}>
                <Building size={16} />
                <span>Facilities</span>
              </TabsTrigger>
              <TabsTrigger
                value="personalTrainingStars"
                onClick={() => handleSort("personalTrainingStars")}
                className={`flex items-center gap-2 ${
                  sortBy === "personalTrainingStars" ? "bg-red-600/20" : ""
                }`}>
                <Clipboard size={16} />
                <span>Training</span>
              </TabsTrigger>
              <TabsTrigger
                value="equipmentStars"
                onClick={() => handleSort("equipmentStars")}
                className={`flex items-center gap-2 ${
                  sortBy === "equipmentStars" ? "bg-red-600/20" : ""
                }`}>
                <Dumbbell size={16} />
                <span>Equipment</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Sorting buttons - Mobile */}
        <div
          className="md:hidden mb-8 overflow-x-auto pb-2"
          data-aos="fade-right">
          <div className="flex gap-2 min-w-max">
            <Button
              variant={sortBy === "trainerStars" ? "default" : "outline"}
              size="sm"
              onClick={() => handleSort("trainerStars")}
              className="flex items-center gap-1">
              <User size={14} />
              <span>Trainers</span>
            </Button>
            <Button
              variant={sortBy === "facilityStars" ? "default" : "outline"}
              size="sm"
              onClick={() => handleSort("facilityStars")}
              className="flex items-center gap-1">
              <Building size={14} />
              <span>Facilities</span>
            </Button>
            <Button
              variant={
                sortBy === "personalTrainingStars" ? "default" : "outline"
              }
              size="sm"
              onClick={() => handleSort("personalTrainingStars")}
              className="flex items-center gap-1">
              <Clipboard size={14} />
              <span>Training</span>
            </Button>
            <Button
              variant={sortBy === "equipmentStars" ? "default" : "outline"}
              size="sm"
              onClick={() => handleSort("equipmentStars")}
              className="flex items-center gap-1">
              <Dumbbell size={14} />
              <span>Equipment</span>
            </Button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedTestimonials.map(
            ({
              id,
              name,
              avatar,
              feedback,
              trainerStars,
              facilityStars,
              personalTrainingStars,
              equipmentStars,
            }) => (
              <Card
                data-aos="fade-up"
                key={`${id}-${newKey}`}
                data-aos-delay={100 + id * 50}
                className="bg-gray-800/50 border-gray-700 overflow-hidden relative group">
                {/* Highlight for the current sort category */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-red-500 transition-all duration-300 ${
                    (sortBy === "trainerStars" && trainerStars >= 4) ||
                    (sortBy === "facilityStars" && facilityStars >= 4) ||
                    (sortBy === "personalTrainingStars" &&
                      personalTrainingStars >= 4) ||
                    (sortBy === "equipmentStars" && equipmentStars >= 4)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}></div>

                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-red-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none">
                      <path d="M11.9 8.4c-.5-.3-1-.4-1.7-.4-3 0-5.5 2.4-5.5 5.5 0 3 2.4 5.5 5.5 5.5 3 0 5.5-2.4 5.5-5.5 0-1.1-.3-2.1-.9-3l-2.9-2.1zm-1.7 8.5c-1.9 0-3.4-1.5-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4.5 0 .9.1 1.3.3l2 1.5c.3.5.5 1 .5 1.6 0 1.9-1.5 3.4-3.4 3.4z" />
                      <path d="M20.2 8.4c-.5-.3-1-.4-1.7-.4-3 0-5.5 2.4-5.5 5.5 0 3 2.4 5.5 5.5 5.5 3 0 5.5-2.4 5.5-5.5 0-1.1-.3-2.1-.9-3l-2.9-2.1zm-1.7 8.5c-1.9 0-3.4-1.5-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4.5 0 .9.1 1.3.3l2 1.5c.3.5.5 1 .5 1.6 0 1.9-1.5 3.4-3.4 3.4z" />
                    </svg>
                  </div>

                  {/* User info */}
                  <div className="flex items-center mb-4">
                    {/* <Avatar className="h-10 w-10 mr-3 border-2 border-red-500/20">
                      <AvatarImage
                        src={avatar || "/placeholder.svg"}
                        alt={name}
                      />
                      <AvatarFallback className="bg-red-500/10 text-red-500">
                        {name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar> */}
                    <div>
                      <h4 className="font-semibold text-white">{name}</h4>
                      <div className="flex">
                        <StarRating
                          rating={
                            sortBy === "trainerStars"
                              ? trainerStars
                              : sortBy === "facilityStars"
                              ? facilityStars
                              : sortBy === "personalTrainingStars"
                              ? personalTrainingStars
                              : equipmentStars
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <p className="text-gray-300 mb-4 italic">{feedback}</p>

                  {/* Ratings */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-gray-700/50 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>Trainers:</span>
                      <StarRating rating={trainerStars} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Building size={12} />
                      <span>Facility:</span>
                      <StarRating rating={facilityStars} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Clipboard size={12} />
                      <span>Training:</span>
                      <StarRating rating={personalTrainingStars} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell size={12} />
                      <span>Equipment:</span>
                      <StarRating rating={equipmentStars} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Call to action */}
        <div
          className="text-center mt-12"
          data-aos="fade-up">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  PersonStanding,
  Coffee,
  Clock,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Features() {
  const [activeTab, setActiveTab] = useState("equipment");

  const features = [
    {
      id: "equipment",
      icon: <Dumbbell className="h-6 w-6" />,
      title: "State-of-the-Art Equipment",
      description:
        "Train with premium fitness equipment from top brands. Our gym features the latest cardio machines, free weights, and specialized training zones.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-red-500 to-orange-500",
      items: [
        "Latest Cardio Machines",
        "Comprehensive Free Weight Area",
        "Functional Training Zone",
        "Specialized Strength Equipment",
        "Recovery & Stretching Area",
      ],
    },
    {
      id: "classes",
      icon: <Users className="h-6 w-6" />,
      title: "Dynamic Group Classes",
      description:
        "Join our energetic group fitness classes led by expert instructors. From high-intensity workouts to mind-body sessions, we have something for everyone.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500 to-indigo-500",
      items: [
        "HIIT & Circuit Training",
        "Yoga & Pilates",
        "Spinning & Cycling",
        "Zumba & Dance Fitness",
        "Strength & Conditioning",
      ],
    },
    {
      id: "training",
      icon: <PersonStanding className="h-6 w-6" />,
      title: "Personal Training",
      description:
        "Achieve your fitness goals faster with our certified personal trainers. Get customized workout plans and nutrition guidance tailored to your specific needs.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-green-500 to-emerald-500",
      items: [
        "One-on-One Sessions",
        "Customized Workout Plans",
        "Nutrition Coaching",
        "Progress Tracking",
        "Specialized Goal Programs",
      ],
    },
    {
      id: "amenities",
      icon: <Coffee className="h-6 w-6" />,
      title: "Premium Amenities",
      description:
        "Enjoy a comfortable workout experience with our premium amenities. Clean locker rooms, towel service, sauna, and a protein shake bar for post-workout recovery.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-purple-500 to-pink-500",
      items: [
        "Luxury Locker Rooms & Showers",
        "Towel Service",
        "Sauna & Steam Room",
        "Protein Shake & Smoothie Bar",
        "Relaxation Lounge",
      ],
    },
    {
      id: "hours",
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Hours",
      description:
        "Work out on your schedule with our extended hours. Our gym is open early mornings to late evenings, with 24/7 access available for premium members.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-yellow-500 to-amber-500",
      items: [
        "Open 5AM to 11PM Weekdays",
        "Weekend Hours 7AM to 9PM",
        "24/7 Access for Premium Members",
        "Holiday Special Hours",
        "Virtual Classes Anytime",
      ],
    },
    {
      id: "community",
      icon: <Shield className="h-6 w-6" />,
      title: "Supportive Community",
      description:
        "Join a motivating community of fitness enthusiasts. Regular events, challenges, and a supportive atmosphere help keep you accountable and inspired.",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-teal-500 to-cyan-500",
      items: [
        "Member Challenges & Events",
        "Fitness Community App",
        "Accountability Programs",
        "Member Socials",
        "Fitness Workshops",
      ],
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/10 mb-4">
            <span className="text-red-400 mr-2">💪</span> ELEVATE YOUR FITNESS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-teal-300),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-5xl font-semibold text-transparent md:text-4xl">
            World-Class Gym Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300">
            Experience premium fitness with top-tier equipment, expert coaching,
            and luxury amenities designed to help you achieve your fitness
            goals.
          </motion.p>
        </div>

        {/* Interactive Feature Tabs */}
        <Tabs
          defaultValue="equipment"
          className="w-full"
          onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800/50 backdrop-blur-sm p-1 border border-gray-700/50">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className={cn(
                    "data-[state=active]:text-white",
                    activeTab === feature.id
                      ? `bg-gradient-to-r ${feature.color} text-white`
                      : "text-gray-400"
                  )}>
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <span className="hidden sm:inline">
                      {feature.title.split(" ")[0]}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Feature Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 mix-blend-overlay`}></div>
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent`}></div>
                </div>

                {/* Feature Content */}
                <div className="space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-xl text-gray-300">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-sm font-bold`}>
                          {index + 1}
                        </div>
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Feature Grid for Mobile */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color}`}></div>

              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white`}>
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-gray-300">{feature.description}</p>

              <button
                className={`mt-4 inline-flex items-center text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                onClick={() => setActiveTab(feature.id)}>
                Learn more <span className="ml-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#membership"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300">
              Start Your Membership
            </a>
            <a
              href="#tour"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              Book a Free Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

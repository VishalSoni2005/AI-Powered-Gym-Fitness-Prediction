"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  Heart,
  StretchVerticalIcon as Stretch,
  Apple,
  Moon,
  Timer,
  UserIcon as UserStanding,
} from "lucide-react";

const categories = [
  {
    id: "strength-training",
    title: "Strength Training",
    icon: Dumbbell,
    color: "bg-red-100 dark:bg-red-950",
    iconColor: "text-red-500",
  },
  {
    id: "cardio",
    title: "Cardiovascular Training",
    icon: Heart,
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-500",
  },
  {
    id: "flexibility",
    title: "Flexibility & Mobility",
    icon: Stretch,
    color: "bg-purple-100 dark:bg-purple-950",
    iconColor: "text-purple-500",
  },
  {
    id: "nutrition",
    title: "Nutrition & Diet",
    icon: Apple,
    color: "bg-green-100 dark:bg-green-950",
    iconColor: "text-green-500",
  },
  {
    id: "recovery",
    title: "Recovery & Rest",
    icon: Moon,
    color: "bg-indigo-100 dark:bg-indigo-950",
    iconColor: "text-indigo-500",
  },
  {
    id: "hiit",
    title: "HIIT",
    icon: Timer,
    color: "bg-orange-100 dark:bg-orange-950",
    iconColor: "text-orange-500",
  },
  {
    id: "calisthenics",
    title: "Calisthenics",
    icon: UserStanding,
    color: "bg-teal-100 dark:bg-teal-950",
    iconColor: "text-teal-500",
  },
];

export function FitnessCategories() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-2"
          onClick={() => scrollToSection(category.id)}>
          <div
            className={`h-2 w-full ${category.color.replace("bg-", "bg-opacity-70 bg-")}`}
          />
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className={`p-4 rounded-full ${category.color} mb-4`}>
              <category.icon className={`h-8 w-8 ${category.iconColor}`} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
            <p className="text-sm text-muted-foreground">Click to learn more</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

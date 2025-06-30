"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Pill, Dumbbell, TrendingUp, NutIcon as Vitamin } from "lucide-react";

const categories = [
  {
    id: "creatine",
    title: "Creatine",
    icon: Pill,
    color: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-500",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    id: "whey-protein",
    title: "Whey Protein",
    icon: Dumbbell,
    color: "bg-green-100 dark:bg-green-950",
    iconColor: "text-green-500",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    id: "mass-gainer",
    title: "Mass Gainer",
    icon: TrendingUp,
    color: "bg-red-100 dark:bg-red-950",
    iconColor: "text-red-500",
    borderColor: "border-red-200 dark:border-red-800",
  },
  {
    id: "multivitamins",
    title: "Multivitamins",
    icon: Vitamin,
    color: "bg-yellow-100 dark:bg-yellow-950",
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-200 dark:border-yellow-800",
  },
];

export function ProductCategories() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-2 ${category.borderColor}`}
          onClick={() => scrollToSection(category.id)}>
          <div
            className={`h-2 w-full ${category.color.replace("bg-", "bg-opacity-70 bg-")}`}
          />
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className={`p-4 rounded-full ${category.color} mb-4`}>
              <category.icon className={`h-8 w-8 ${category.iconColor}`} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
            <p className="text-sm text-muted-foreground">
              Click to browse products
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

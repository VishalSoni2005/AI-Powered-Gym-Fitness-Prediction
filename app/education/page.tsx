import { FitnessCategories } from "@/components/fitness-categories";
import { CategoryContent } from "@/components/category-content";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function EducationPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Fitness Education Hub</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore different fitness categories and learn the fundamentals of
            effective training, proper nutrition, and recovery techniques to
            maximize your results.
          </p>
        </div>

        <FitnessCategories />

        <div className="mt-16 space-y-24">
          <CategoryContent
            id="strength-training"
            title="Strength Training"
            description="Build muscle, increase strength, and improve your overall physique with resistance training."
            imageUrl="/images/client-logo-11.avif"
          />

          <CategoryContent
            id="cardio"
            title="Cardiovascular Training"
            description="Improve heart health, burn calories, and boost endurance with effective cardio workouts."
            imageUrl="/images/client-logo-12.avif"
          />

          <CategoryContent
            id="flexibility"
            title="Flexibility & Mobility"
            description="Enhance your range of motion, prevent injuries, and improve performance with proper stretching techniques."
            imageUrl="/images/client-logo-14.avif"
          />

          <CategoryContent
            id="nutrition"
            title="Nutrition & Diet"
            description="Fuel your body properly to support your fitness goals, recovery, and overall health."
            imageUrl="/images/client-logo-13.avif"
          />

          <CategoryContent
            id="recovery"
            title="Recovery & Rest"
            description="Optimize your results by understanding the importance of proper recovery techniques and adequate rest."
            imageUrl="/images/client-logo-13.avif"
          />

          <CategoryContent
            id="hiit"
            title="High-Intensity Interval Training (HIIT)"
            description="Maximize calorie burn and improve conditioning with time-efficient, high-intensity workouts."
            imageUrl="/images/client-logo-13.avif"
          />

          <CategoryContent
            id="calisthenics"
            title="Calisthenics & Bodyweight Training"
            description="Master your own bodyweight with functional movements that build strength, control, and body awareness."
            imageUrl="/images/client-logo-13.avif"
          />
        </div>

        <ScrollToTopButton />
      </div>
    </div>
  );
}

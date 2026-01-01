import FitnessPredictionForm from "@/components/fitness-prediction-form";
export const metadata = {
  title: "Fit Starts",
  description: "Page description",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950  text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          AI Fitness Prediction
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Enter your current measurements and goals to get AI-predicted results
          after 3 months of regular workouts.
        </p>

        <FitnessPredictionForm />
      </div>
    </main>
  );
}

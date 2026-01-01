import FitnessPredictionForm from "@/components/fitness-prediction-form";

export const metadata = {
  title: "Fit Starts",
  description: "AI-powered fitness prediction and transformation tracker",
};

export default function Home() {
  return (
    <main className="min-h-screen dark bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI Fitness Prediction
          </h1>
          <p className="text-slate-400 text-center mb-2 max-w-2xl mx-auto text-lg">
            Enter your current measurements and goals to get AI-predicted
            results after regular workouts.
          </p>
          <p className="text-slate-500 text-center text-sm max-w-2xl mx-auto">
            Powered by advanced AI to predict your fitness transformation
          </p>
        </div>

        <FitnessPredictionForm />
      </div>
    </main>
  );
}

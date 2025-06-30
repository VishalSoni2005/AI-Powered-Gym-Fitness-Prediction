import { Card } from "@/components/ui/card";
import {
  Dumbbell,
  Scale,
  TrendingDown,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

interface ResultsDisplayProps {
  results: {
    expectedWeight: number;
    musclesGain: number;
    months: number;
    fatloss: number;
    strenghtIncrease: number;
    chest: number;
    biceps: number;
    waist: number;
    bmi: number;
    recommendations: string[];
  };
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div className="space-y-6 ">
      <Card className="p-6 text-white bg-zinc-900 border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Your {results.months } Month Prediction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
            <Scale className="h-8 w-8 mr-3 text-purple-500" />
            <div>
              <p className="text-gray-400 text-sm">Expected Weight</p>
              <p className="text-xl font-semibold">
                {results.expectedWeight} kg
              </p>
            </div>
          </div>

          <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Muscle Gain</p>
              <p className="text-xl font-semibold">{results.musclesGain} kg</p>
            </div>
          </div>

          <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
            <TrendingDown className="h-8 w-8 mr-3 text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">Fat Loss</p>
              <p className="text-xl font-semibold">{results.fatloss} kg</p>
            </div>
          </div>

          <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
            <Dumbbell className="h-8 w-8 mr-3 text-amber-500" />
            <div>
              <p className="text-gray-400 text-sm">Strength Increase</p>
              <p className="text-xl font-semibold">
                {results.strenghtIncrease}%
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Body Measurements</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Chest</p>
            <p className="text-xl font-semibold">{results.chest} cm</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Biceps</p>
            <p className="text-xl font-semibold">{results.biceps} cm</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">Waist</p>
            <p className="text-xl font-semibold">{results.waist} cm</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">BMI</p>
            <p className="text-xl font-semibold">{results.bmi}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 text-white bg-zinc-900 border-zinc-800">
        <div className="flex items-center mb-4">
          <Lightbulb className="h-6 w-6 mr-2 text-yellow-500" />
          <h3 className="text-xl font-semibold">Recommendations</h3>
        </div>
        <ul className="space-y-3">
          {results.recommendations.map((recommendation, index) => (
            <li
              key={index}
              className="bg-zinc-800 p-3 rounded-lg">
              {recommendation}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

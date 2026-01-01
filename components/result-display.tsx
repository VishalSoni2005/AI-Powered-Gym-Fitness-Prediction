import { Card } from "@/components/ui/card";
import {
  Dumbbell,
  Scale,
  TrendingDown,
  TrendingUp,
  Lightbulb,
  Zap,
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
    <div className="space-y-6">
      {/* Main Results Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />

        <div className="relative p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Your Results
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {results.months} Month Transformation
            </h3>
          </div>

          {/* Key Metrics - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Expected Weight */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      Expected Weight
                    </p>
                    <p className="text-4xl font-bold text-white">
                      {results.expectedWeight}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">kg</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 rounded-lg border border-cyan-500/30">
                    <Scale className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Muscle Gain */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      Muscle Gain
                    </p>
                    <p className="text-4xl font-bold text-white">
                      {results.musclesGain}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">kg</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-lg border border-emerald-500/30">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Fat Loss */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      Fat Loss
                    </p>
                    <p className="text-4xl font-bold text-white">
                      {results.fatloss}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">kg</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-lg border border-blue-500/30">
                    <TrendingDown className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Strength Increase */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-2">
                      Strength Increase
                    </p>
                    <p className="text-4xl font-bold text-white">
                      {results.strenghtIncrease}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">%</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-lg border border-orange-500/30">
                    <Dumbbell className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body Measurements */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Body Measurements
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Chest",
                  value: results.chest,
                  unit: "cm",
                  color:
                    "from-pink-500/20 to-pink-400/10 border-pink-500/30 text-pink-400",
                },
                {
                  label: "Biceps",
                  value: results.biceps,
                  unit: "cm",
                  color:
                    "from-purple-500/20 to-purple-400/10 border-purple-500/30 text-purple-400",
                },
                {
                  label: "Waist",
                  value: results.waist,
                  unit: "cm",
                  color:
                    "from-cyan-500/20 to-cyan-400/10 border-cyan-500/30 text-cyan-400",
                },
                {
                  label: "BMI",
                  value: results.bmi,
                  unit: "",
                  color:
                    "from-emerald-500/20 to-emerald-400/10 border-emerald-500/30 text-emerald-400",
                },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <p className="text-slate-400 text-xs font-medium mb-2">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">{metric.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Recommendations Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 pointer-events-none" />

        <div className="relative p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            </div>
            AI Recommendations
          </h3>
          <ul className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <li
                key={index}
                className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 text-slate-300 leading-relaxed hover:bg-slate-800/60 transition-all duration-300 flex gap-3"
              >
                <span className="text-yellow-400 font-bold flex-shrink-0 mt-0.5">
                  {index + 1}.
                </span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

// import { Card } from "@/components/ui/card";
// import {
//   Dumbbell,
//   Scale,
//   TrendingDown,
//   TrendingUp,
//   Lightbulb,
// } from "lucide-react";

// interface ResultsDisplayProps {
//   results: {
//     expectedWeight: number;
//     musclesGain: number;
//     months: number;
//     fatloss: number;
//     strenghtIncrease: number;
//     chest: number;
//     biceps: number;
//     waist: number;
//     bmi: number;
//     recommendations: string[];
//   };
// }

// export default function ResultsDisplay({ results }: ResultsDisplayProps) {
//   return (
//     <div className="space-y-6 ">
//       <Card className="p-6 text-white bg-zinc-900 border-zinc-800">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Your {results.months } Month Prediction
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
//             <Scale className="h-8 w-8 mr-3 text-purple-500" />
//             <div>
//               <p className="text-gray-400 text-sm">Expected Weight</p>
//               <p className="text-xl font-semibold">
//                 {results.expectedWeight} kg
//               </p>
//             </div>
//           </div>

//           <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
//             <TrendingUp className="h-8 w-8 mr-3 text-green-500" />
//             <div>
//               <p className="text-gray-400 text-sm">Muscle Gain</p>
//               <p className="text-xl font-semibold">{results.musclesGain} kg</p>
//             </div>
//           </div>

//           <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
//             <TrendingDown className="h-8 w-8 mr-3 text-blue-500" />
//             <div>
//               <p className="text-gray-400 text-sm">Fat Loss</p>
//               <p className="text-xl font-semibold">{results.fatloss} kg</p>
//             </div>
//           </div>

//           <div className="bg-zinc-800 p-4 rounded-lg flex items-center">
//             <Dumbbell className="h-8 w-8 mr-3 text-amber-500" />
//             <div>
//               <p className="text-gray-400 text-sm">Strength Increase</p>
//               <p className="text-xl font-semibold">
//                 {results.strenghtIncrease}%
//               </p>
//             </div>
//           </div>
//         </div>

//         <h3 className="text-xl font-semibold mb-4">Body Measurements</h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-zinc-800 p-4 rounded-lg">
//             <p className="text-gray-400 text-sm">Chest</p>
//             <p className="text-xl font-semibold">{results.chest} cm</p>
//           </div>
//           <div className="bg-zinc-800 p-4 rounded-lg">
//             <p className="text-gray-400 text-sm">Biceps</p>
//             <p className="text-xl font-semibold">{results.biceps} cm</p>
//           </div>
//           <div className="bg-zinc-800 p-4 rounded-lg">
//             <p className="text-gray-400 text-sm">Waist</p>
//             <p className="text-xl font-semibold">{results.waist} cm</p>
//           </div>
//           <div className="bg-zinc-800 p-4 rounded-lg">
//             <p className="text-gray-400 text-sm">BMI</p>
//             <p className="text-xl font-semibold">{results.bmi}</p>
//           </div>
//         </div>
//       </Card>

//       <Card className="p-6 text-white bg-zinc-900 border-zinc-800">
//         <div className="flex items-center mb-4">
//           <Lightbulb className="h-6 w-6 mr-2 text-yellow-500" />
//           <h3 className="text-xl font-semibold">Recommendations</h3>
//         </div>
//         <ul className="space-y-3">
//           {results.recommendations.map((recommendation, index) => (
//             <li
//               key={index}
//               className="bg-zinc-800 p-3 rounded-lg">
//               {recommendation}
//             </li>
//           ))}
//         </ul>
//       </Card>
//     </div>
//   );
// }

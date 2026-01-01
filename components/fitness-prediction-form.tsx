"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { getPrediction } from "@/app/(home)/ai/actions";
import ResultsDisplay from "./result-display";

const formSchema = z.object({
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  bmi: z.string().min(1, "BMI is required"),
  chest: z.string().min(1, "Chest measurement is required"),
  waist: z.string().min(1, "Waist measurement is required"),
  biceps: z.string().min(1, "Biceps measurement is required"),
  workoutType: z.string().min(1, "Workout type is required"),
  goals: z.string().min(1, "Goals are required"),
  months: z.string().min(1, "Months are required"),
});

const calculateBMI = (height: number, weight: number) => {
  if (!height || !weight) return "";
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
};

export default function FitnessPredictionForm() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
      height: "",
      age: "",
      gender: "",
      bmi: "",
      chest: "",
      waist: "",
      biceps: "",
      workoutType: "",
      goals: "",
      months: "",
    },
  });

  useEffect(() => {
    // to Calculate BMI dynamically
    const height = Number.parseFloat(form.getValues("height"));
    const weight = Number.parseFloat(form.getValues("weight"));

    if (!isNaN(height) && !isNaN(weight)) {
      form.setValue("bmi", calculateBMI(height, weight), {
        shouldValidate: true,
      });
    }
  }, [form.watch("height"), form.watch("weight")]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const prediction = await getPrediction(values);
      setResults(prediction);
    } catch (error) {
      console.error("Error getting prediction:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Form Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />

        <div className="relative p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Personal Assessment
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Your Fitness Data
            </h3>
            <p className="text-slate-400">
              Enter your measurements for personalized AI predictions
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Info Section */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Basic Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Weight (kg)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="70"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Height (cm)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="175"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Age
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="25"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Gender
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className=" bg-slate-900 
              border-slate-700 text-slate-100
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/30
              hover:border-slate-600"
                            >
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            className=" bg-slate-900
              border-slate-700
              text-slate-100
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/30
              hover:border-slate-600"
                          >
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Body Measurements Section */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  Body Measurements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <FormField
                    control={form.control}
                    name="bmi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          BMI
                        </FormLabel>
                        <FormControl>
                          <Input
                            readOnly
                            placeholder="Auto-calculated"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 cursor-not-allowed opacity-75"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="chest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Chest (cm)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="95"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="waist"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Waist (cm)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="80"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="biceps"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Biceps (cm)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="35"
                            type="number"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="months"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase text-slate-400">
                          Months
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="3"
                            type="number"
                            step="1"
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Workout & Goals Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-pink-400" />
                  Workout & Goals
                </h4>
                {/* 
                <FormField
                  control={form.control}
                  name="workoutType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase text-slate-400">
                        Workout Type
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20">
                            <SelectValue placeholder="Select workout type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="strength">
                            Strength Training
                          </SelectItem>
                          <SelectItem value="cardio">Cardio</SelectItem>
                          <SelectItem value="hiit">HIIT</SelectItem>
                          <SelectItem value="yoga">Yoga</SelectItem>
                          <SelectItem value="crossfit">CrossFit</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

             */}

                <FormField
                  control={form.control}
                  name="workoutType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide text-slate-400">
                        Workout Type
                      </FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className="
              bg-slate-900
              border-slate-700
              text-slate-100
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-500/30
              hover:border-slate-600
            "
                          >
                            <SelectValue placeholder="Select workout type" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent
                          className="
            bg-slate-900
            border border-slate-700
            text-slate-100
            shadow-xl
          "
                        >
                          {[
                            ["strength", "Strength Training"],
                            ["cardio", "Cardio"],
                            ["hiit", "HIIT"],
                            ["yoga", "Yoga"],
                            ["crossfit", "CrossFit"],
                            ["mixed", "Mixed"],
                          ].map(([value, label]) => (
                            <SelectItem
                              key={value}
                              value={value}
                              className="
                focus:bg-cyan-500/10
                focus:text-cyan-400
                hover:bg-slate-800
                cursor-pointer
              "
                            >
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase text-slate-400">
                        Your Goals
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your fitness goals here..."
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20 min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Your Data...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Get AI Prediction
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Card>

      {/* Results Section */}
      {results ? (
        <ResultsDisplay results={results} />
      ) : (
        <Card className="bg-gradient-to-br text-white from-slate-900 to-slate-950 border-slate-700/50">
          <div className="relative h-64 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
            <div className="relative text-center p-8">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-slate-700">
                <Zap className="w-6 h-6 text-cyan-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Results Coming Soon
              </h3>
              <p className="text-slate-400 max-w-sm">
                Fill out the form above and submit to see your personalized
                AI-predicted fitness transformation results.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Loader2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";
// import { getPrediction } from "@/app/(home)/ai/actions";
// import ResultsDisplay from "./result-display";

// const formSchema = z.object({
//   weight: z.string().min(1, "Weight is required"),
//   height: z.string().min(1, "Height is required"),
//   age: z.string().min(1, "Age is required"),
//   gender: z.string().min(1, "Gender is required"),
//   bmi: z.string().min(1, "BMI is required"),
//   chest: z.string().min(1, "Chest measurement is required"),
//   waist: z.string().min(1, "Waist measurement is required"),
//   biceps: z.string().min(1, "Biceps measurement is required"),
//   workoutType: z.string().min(1, "Workout type is required"),
//   goals: z.string().min(1, "Goals are required"),
//   months: z.string().min(1, "Months are required"),
// });

// const calculateBMI = (height: number, weight: number) => {
//   if (!height || !weight) return "";
//   let heightInMeters = height / 100;
//   return (weight / (heightInMeters * heightInMeters)).toFixed(2);
// };

// export default function FitnessPredictionForm() {
//   const [loading, setLoading] = useState(false);
//   const [results, setResults] = useState<any>(null);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       weight: "",
//       height: "",
//       age: "",
//       gender: "",
//       bmi: "",
//       chest: "",
//       waist: "",
//       biceps: "",
//       workoutType: "",
//       goals: "",
//       months: "",
//     },
//   });

//   useEffect(() => {
//     // to Calculate BMI dynamically
//     const height = parseFloat(form.getValues("height"));
//     const weight = parseFloat(form.getValues("weight"));

//     if (!isNaN(height) && !isNaN(weight)) {
//       form.setValue("bmi", calculateBMI(height, weight), {
//         shouldValidate: true,
//       });
//     }
//   }, [form.watch("height"), form.watch("weight")]);

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setLoading(true);
//     try {
//       const prediction = await getPrediction(values);
//       setResults(prediction);
//     } catch (error) {
//       console.error("Error getting prediction:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <Card className="p-6 bg-zinc-900 text-white border-zinc-800">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FormField
//                 control={form.control}
//                 name="weight"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Weight (kg)</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="70"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="height"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Height (cm)</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="175"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="age"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Age</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="25"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="gender"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Gender</FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger className="bg-zinc-800 border-zinc-700">
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent className="bg-zinc-800 border-zinc-700">
//                         <SelectItem value="male">Male</SelectItem>
//                         <SelectItem value="female">Female</SelectItem>
//                         <SelectItem
//                           className="bg-red-600"
//                           value="other">
//                           Other
//                         </SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="bmi"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>BMI</FormLabel>
//                     <FormControl>
//                       <Input
//                         readOnly // UPDATED: BMI field is now readonly
//                         placeholder="Auto-calculated"
//                         className="bg-zinc-800 border-zinc-700 cursor-not-allowed"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="chest"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Chest (cm)</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="95"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="waist"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Waist (cm)</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="80"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="biceps"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Biceps (cm)</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="35"
//                         type="number"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="months"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Months</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="3"
//                         type="number"
//                         step="1"
//                         className="bg-zinc-800 border-zinc-700"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <FormField
//               control={form.control}
//               name="workoutType"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Workout Type</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger className="bg-zinc-800 border-zinc-700">
//                         <SelectValue placeholder="Select workout type" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent className="bg-zinc-800 border-zinc-700">
//                       <SelectItem value="strength">
//                         Strength Training
//                       </SelectItem>
//                       <SelectItem value="cardio">Cardio</SelectItem>
//                       <SelectItem value="hiit">HIIT</SelectItem>
//                       <SelectItem value="yoga">Yoga</SelectItem>
//                       <SelectItem value="crossfit">CrossFit</SelectItem>
//                       <SelectItem value="mixed">Mixed</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="goals"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Your Goals</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Describe your fitness goals here..."
//                       className="bg-zinc-800 border-zinc-700 min-h-[100px]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//               disabled={loading}>
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Predicting...
//                 </>
//               ) : (
//                 "Get AI Prediction"
//               )}
//             </Button>
//           </form>
//         </Form>
//       </Card>

//       <div>
//         {results ? (
//           <ResultsDisplay results={results} />
//         ) : (
//           <div className="h-full flex items-center justify-center">
//             <div className="text-center p-8 bg-zinc-900 rounded-lg border border-zinc-800">
//               <h3 className="text-xl font-semibold mb-2">
//                 Your Prediction Results
//               </h3>
//               <p className="text-gray-400">
//                 Fill out the form and submit to see your AI-predicted fitness
//                 results after selected months.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

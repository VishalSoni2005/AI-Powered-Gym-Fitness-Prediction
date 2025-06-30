"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";

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
import { getPrediction } from "@/app/ai/actions";
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
  let heightInMeters = height / 100;
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
    const height = parseFloat(form.getValues("height"));
    const weight = parseFloat(form.getValues("weight"));

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 bg-zinc-900 text-white border-zinc-800">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="70"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="175"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="25"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem
                          className="bg-red-600"
                          value="other">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bmi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>BMI</FormLabel>
                    <FormControl>
                      <Input
                        readOnly // UPDATED: BMI field is now readonly
                        placeholder="Auto-calculated"
                        className="bg-zinc-800 border-zinc-700 cursor-not-allowed"
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
                    <FormLabel>Chest (cm)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="95"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Waist (cm)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="80"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Biceps (cm)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="35"
                        type="number"
                        className="bg-zinc-800 border-zinc-700"
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
                    <FormLabel>Months</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="3"
                        type="number"
                        step="1"
                        className="bg-zinc-800 border-zinc-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="workoutType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workout Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select workout type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
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

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your fitness goals here..."
                      className="bg-zinc-800 border-zinc-700 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Predicting...
                </>
              ) : (
                "Get AI Prediction"
              )}
            </Button>
          </form>
        </Form>
      </Card>

      <div>
        {results ? (
          <ResultsDisplay results={results} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-2">
                Your Prediction Results
              </h3>
              <p className="text-gray-400">
                Fill out the form and submit to see your AI-predicted fitness
                results after selected months.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

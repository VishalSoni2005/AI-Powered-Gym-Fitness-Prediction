"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

let API_KEY: string = process.env.NEXT_PUBLIC_API_KEY ?? "";

export async function getPrediction(userData: {
  weight: string;
  height: string;
  age: string;
  gender: string;
  bmi: string;
  chest: string;
  waist: string;
  biceps: string;
  workoutType: string;
  goals: string;
  months: string;
}) {
  try {
    // Gemini API
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // prompt 
    const prompt = `
      Based on the following user data, predict fitness results after ${userData.months} months of regular workouts:
      
      Current measurements:
      - Weight: ${userData.weight} kg
      - Height: ${userData.height} cm
      - Age: ${userData.age}
      - Gender: ${userData.gender}
      - Current BMI: ${userData.bmi}
      - Chest: ${userData.chest} cm
      - Waist: ${userData.waist} cm
      - Biceps: ${userData.biceps} cm
      - Workout Type: ${userData.workoutType}
      - Goals: ${userData.goals}
      
      Please provide a JSON response with the following structure:
      {
        "expectedWeight": number,
        "musclesGain": number,
        "fatloss": number,
        "strenghtIncrease": number,
        "chest": number,
        "biceps": number,
        "waist": number,
        "months": number,
        "bmi": number,
        "recommendations": [string, string, string, string, string]
      }
      
      Provide realistic values based on fitness science and typical results for someone with these measurements following a regular workout routine for ${userData.months} months.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse JSON from Gemini response");
    }

    const jsonResponse = JSON.parse(jsonMatch[0]);
    return jsonResponse;
  } catch (error) {
    console.error("Error calling Gemini API:", error);

    return {
      expectedWeight: Number.parseFloat(userData.weight) - 3,
      musclesGain: 2.5,
      fatloss: 5.5,
      strenghtIncrease: 15,
      chest: Number.parseFloat(userData.chest) + 2,
      biceps: Number.parseFloat(userData.biceps) + 1.5,
      waist: Number.parseFloat(userData.waist) - 3,
      bmi: (Number.parseFloat(userData.bmi) - 1).toFixed(1),
      recommendations: [
        "Maintain a caloric deficit of 300-500 calories per day",
        "Include at least 3 strength training sessions per week",
        "Add 2 cardio sessions of 30 minutes each",
        "Ensure you're consuming 1.6-2g of protein per kg of body weight",
        "Get 7-8 hours of quality sleep for optimal recovery",
      ],
    };
  }
}

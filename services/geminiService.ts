
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using the API key exclusively from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCoffeeAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are an expert coffee sommelier and business consultant for 'BrewMaster Solutions'. Your goal is to help businesses (hotels, offices, cafes) choose the right coffee machines and beans. Be professional, helpful, and concise. Refer to our general offerings: Super Automatic machines for offices, Manual machines for cafes, and premium single-origin beans.",
      },
    });
    // Access the .text property directly to retrieve the generated content.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my coffee knowledge base. How else can I help you today?";
  }
};

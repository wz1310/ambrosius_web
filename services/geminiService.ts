
import { GoogleGenAI } from "@google/genai";

// Mengambil API Key dengan aman
const API_KEY = typeof process !== 'undefined' ? process.env.API_KEY : '';

export const getCoffeeAdvice = async (userQuery: string) => {
  if (!API_KEY) {
    console.error("API Key Gemini tidak ditemukan. Pastikan Anda sudah mengaturnya di environment variables.");
    return "Maaf, asisten AI sedang tidak aktif karena konfigurasi kunci API belum tersedia.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are an expert coffee sommelier and business consultant for 'BrewMaster Solutions'. Your goal is to help businesses (hotels, offices, cafes) choose the right coffee machines and beans. Be professional, helpful, and concise. Refer to our general offerings: Super Automatic machines for offices, Manual machines for cafes, and premium single-origin beans.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my coffee knowledge base. How else can I help you today?";
  }
};

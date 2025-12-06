import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
// Note: In a real production app without a backend, we'd be careful about exposing keys.
// For this demo, we assume the environment variable is injected safely or this runs in a secure context.
const ai = new GoogleGenAI({ apiKey });

export const getAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) return "I'm sorry, I cannot connect to the AI service at the moment.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are 'Pindith Assistant', a helpful and friendly agricultural expert for Pindith Green Ventures. Your goal is to help customers with questions about rabbit farming, poultry care, nutritional benefits of white meat, and suggest simple cooking recipes for rabbit and chicken. Keep answers concise (under 100 words), professional, and encouraging. If asked about prices, refer them to the product list.",
      }
    });

    return response.text || "I didn't catch that. Could you try asking again?";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};

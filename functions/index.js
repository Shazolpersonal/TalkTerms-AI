import { onCall } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";

// Initialize Firebase Admin SDK
initializeApp();

// Define the JSON schema for the AI's output
const jsonSchema = {
  type: "object",
  properties: {
    offerScorecard: {
      type: "object",
      properties: {
        score: { type: "string", description: "A letter grade for the offer, e.g., 'B+' or 'A-'." },
        scoreValue: { type: "number", description: "A numerical score from 0 to 100 corresponding to the grade." },
        summary: { type: "string", description: "A concise, one-sentence summary of the offer's strength." },
      },
      required: ["score", "scoreValue", "summary"],
    },
    keyLevers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          icon: { type: "string", description: "An icon name from Lucide React library (e.g., 'TrendingUp', 'ShieldCheck', 'Lightbulb')." },
          title: { type: "string", description: "The specific negotiation point (e.g., 'Salary & Bonus')." },
          description: { type: "string", description: "A 1-2 sentence analysis of this negotiation lever." },
        },
        required: ["icon", "title", "description"],
      },
    },
    talkingPoints: {
      type: "array",
      items: {
        type: "object",
        properties: {
          topic: { type: "string", description: "The category of talking points (e.g., 'Opening Statement')." },
          points: { type: "array", items: { type: "string" }, description: "Specific phrases or sentences to use." },
        },
        required: ["topic", "points"],
      },
    },
    counterProposals: {
      type: "array",
      items: {
        type: "object",
        properties: {
          area: { type: "string", description: "The area for the counter proposal (e.g., 'Base Salary')." },
          suggestion: { type: "string", description: "A concrete suggestion for a counter offer." },
          rationale: { type: "string", description: "The justification for the suggestion." },
        },
        required: ["area", "suggestion", "rationale"],
      },
    },
    draftEmail: {
      type: "object",
      properties: {
        subject: { type: "string", description: "A suggested subject line for a negotiation email." },
        body: { type: "string", description: "A complete draft of a professional negotiation email, with placeholders like [Company Name]." },
      },
      required: ["subject", "body"],
    },
  },
  required: ["offerScorecard", "keyLevers", "talkingPoints", "counterProposals", "draftEmail"],
};


export const analyzeNegotiation = onCall({
  // Allow 2 minutes for the AI to process
  timeoutSeconds: 120,
}, async (request) => {
  const text = request.data.text;
  if (!text) {
    throw new Error("Function must be called with 'text' argument.");
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable not set.");
  }

  const parser = new JsonOutputParser();

  const prompt = new PromptTemplate({
    template: `You are a world-class negotiation coach. Your goal is to analyze a user's provided job offer or negotiation text and provide a comprehensive, structured analysis.

    Analyze the following text:
    \`\`\`
    {text}
    \`\`\`

    Return your complete analysis as a single JSON object that strictly follows this schema. Do not include any other text, just the JSON object.

    {format_instructions}
    `,
    inputVariables: ["text"],
    partialVariables: { format_instructions: parser.getFormatInstructions(jsonSchema) },
  });

  const model = new ChatGoogleGenerativeAI({
    apiKey,
    model: "gemini-2.5-flash-latest",
    temperature: 0.5,
  });

  const chain = prompt.pipe(model).pipe(parser);

  try {
    const result = await chain.invoke({ text });
    return result;
  } catch (e) {
    console.error("Error invoking the AI chain:", e);
    // Throw a more specific error to the client
    throw new Error("Failed to get analysis from the AI model. Please try again later.");
  }
});

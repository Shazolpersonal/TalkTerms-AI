const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google AI client with the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

const prompt = `
You are an expert negotiation analyst. Analyze the following negotiation text and return a structured JSON object.
The JSON object must follow this exact schema:
{
  "offerScorecard": {
    "score": "string (e.g., 'A-', 'B+', 'C')",
    "scoreValue": "number (0-100)",
    "summary": "string (A brief, insightful summary of the offer's strengths and weaknesses.)"
  },
  "keyLevers": [
    {
      "icon": "string (one of: 'TrendingUp', 'ShieldCheck', 'Lightbulb', 'Users', 'DollarSign', 'Briefcase')",
      "title": "string (e.g., 'Salary & Bonus', 'Health & Wellness Benefits', 'Professional Development')",
      "description": "string (Concise analysis of this specific part of the offer.)"
    }
  ],
  "talkingPoints": [
    {
      "topic": "string (e.g., 'Opening Statement', 'On Base Salary', 'Regarding Remote Work')",
      "points": ["string", "string", ...]
    }
  ],
  "counterProposals": [
    {
      "area": "string (e.g., 'Base Salary', 'Performance Bonus', 'Stock Options')",
      "suggestion": "string (A specific, actionable counter-proposal.)",
      "rationale": "string (A brief justification for the counter-proposal.)"
    }
  ],
  "draftEmail": {
    "subject": "string (A professional subject line for a counter-offer email.)",
    "body": "string (A well-structured, polite, and firm draft email body for the counter-offer. Use placeholders like [Hiring Manager Name], [Company Name], [Job Title], and [Your Name].)"
  }
}

Analyze the following text:
`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { negotiationText } = JSON.parse(event.body);

    if (!negotiationText || typeof negotiationText !== 'string' || negotiationText.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid input: negotiationText is required.' }),
      };
    }

    const fullPrompt = `${prompt}\n\n"${negotiationText}"`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = await response.text();

    // Clean the response to ensure it's valid JSON
    const jsonText = text.replace(/```json/g, '').replace(/```/g, '').trim();

    // Parse the JSON string into an object
    const analysisResult = JSON.parse(jsonText);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analysisResult),
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while analyzing the negotiation text.', details: error.message }),
    };
  }
};

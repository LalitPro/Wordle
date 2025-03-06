import axios from "axios";

const getWordHint = async (word) => {
  const API_KEY = "AIzaSyDTOmfvgSoqJS4mPhjoOFhq0Zf3mSP2kQ8"; // Apna API key yaha daalo
  const API_URL =
    "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText";

  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: `Give me a simple and short hint for the word: "${word}" in one line.`,
        max_tokens: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data?.choices?.[0]?.text || "No hint found!";
  } catch (error) {
    console.error("Error fetching hint:", error);
    return "Error fetching hint!";
  }
};

export default getWordHint;

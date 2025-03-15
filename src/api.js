import axios from "axios";

const getWordHint = async (word) => {
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await axios.get(API_URL);
    return response.data[0].meanings[0].definitions;
  } catch (error) {
    console.error(error);
  }
};

export default getWordHint;

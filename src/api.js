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

export const getWordPronunciation = async (word) => {
  const API_URL = "https://api.sws.speechify.com/v1/audio/speech";
  const TOKEN = "Uy_WJaqiYwHgh9ezweUuJVV5LhAHUuQMa4G7eRSMtAI=";

  const requestData = {
    input: word,
    voice_id: "rohit",
    audio_format: "mp3",
  };

  const response = await axios.post(API_URL, requestData, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const base64Audio = response.data.audio_data;

  const audioBlob = new Blob(
    [
      new Uint8Array(
        atob(base64Audio)
          .split("")
          .map((char) => char.charCodeAt(0))
      ),
    ],
    { type: "audio/wav" }
  );

  // ऑडियो ऑब्जेक्ट बनाएं
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);

  return audio;
};

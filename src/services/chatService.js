// src/services/chatbotService.js

const API_URL = process.env.REACT_APP_API_URL; // Ensure this is defined in your .env file
const prompt_engineer = "give me the response in 2-3 sentences"

export const sendMessageToChatbot = async (prompt) => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt_engineer + prompt }), // Wrap prompt in an object with the key "prompt"
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.reply; // Adjust based on the structure of the response from the server
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    throw new Error('Failed to get response from chatbot');
  }
};

import axios from "axios";
import ResumeContent from "./resumeContent";
import { ENDPOINT, SYSTEM_PROMPT } from "./constants";

const systemPrompt = SYSTEM_PROMPT(ResumeContent);

const getResponse = async (query) => {
    const response = await axios.post(ENDPOINT, {
      messages: [
        {
          role: "system",
          content: `${systemPrompt}`,
        },
        {
          role: "user",
          content: query,
        },
      ],
      model: "grok-2-1212",
      temperature: 0,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_LLM_KEY}`
        }
    });
    return response.data.choices[0].message.content;
};

export default getResponse;
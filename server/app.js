
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

const systemPrompt = `
You are a helpful and friendly real estate assistant for an agent in Toronto. 
Answer questions about listings, prices, availability, open houses, and area info. 
Be concise and always offer to connect the user with the agent if needed.
`;

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    res.json({ reply: completion.data.choices[0].message.content.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error communicating with OpenAI");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TalkSmart bot running on port ${PORT}`));

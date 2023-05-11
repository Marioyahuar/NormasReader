const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const generator = {};

// Set up your OpenAI API credentials
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getLaws(input) {
  const prompt = `Please extract from the following text all rules that are directly or indirectly related to environmental aspects, public health or industrial safety, and include the rule's description. Give the Answer in Spanish: "${input}"`;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.data.choices[0].message.content;
}

generator.getLaws = getLaws;

module.exports = generator;

const { AzureOpenAI } = require("openai");

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || "<endpoint>";
const apiKey = process.env.AZURE_OPENAI_API_KEY || "<api key>";
const apiVersion = process.env.OPENAI_API_VERSION || "<api version>";
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "<deployment>";

const messages = [
  {
    role: "system",
    content: "あなたはCoderDojoについて詳しいアシスタントです。",
  },
  {
    role: "user",
    content: "CoderDojoに関わる人たちのことを教えてください。",
  },
  {
    role: "assistant",
    content:
      "もちろんです。ちなみにそれは、チャンピオンやメンターなどの呼び名のことでしょうか。",
  },
  { role: "user", content: "はい、そうです！" },
];

async function main() {
  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment,
  });

  const result = await client.chat.completions.create({ messages });

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };

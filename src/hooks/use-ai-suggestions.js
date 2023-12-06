import OpenAI from "openai";
import { useCallback, useState } from "react";

const API_KEY = ''

const client = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
})

async function getCompletions(input) {
  const completions = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ "role": "user", content: input }]
  })
  const content = completions?.choices?.[0]?.message?.content
  return content ?? 'No completion available'
}

function useAISuggestions() {
  const [suggestion, setSuggestion] = useState('')
  const [loading, setLoading] = useState(false)

  const getSuggestion = useCallback(async (input = '') => {
    setLoading(true)
    const completion = await getCompletions(input)
    setSuggestion(completion)
    setLoading(false)
  }, [])

  return {
    suggestion,
    loading,
    getSuggestion
  }
}

export default useAISuggestions

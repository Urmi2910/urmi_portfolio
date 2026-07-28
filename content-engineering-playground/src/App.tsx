import { useState } from 'react'
import { GeneratedMessage } from './components/GeneratedMessage'
import { PromptPanel } from './components/PromptPanel'
import { RetrievedContext } from './components/RetrievedContext'
import { ScenarioSelector } from './components/ScenarioSelector'
import { buildPrompt } from './services/contextBuilder'
import { generateMessage } from './services/generator'
import { getScenarios, retrieve, type ContentContext } from './services/retriever'
import { validateMessage, type ValidationReport } from './services/validator'
import './App.css'

const scenarios = getScenarios()

function App() {
  const [selectedId, setSelectedId] = useState(scenarios[0]?.id ?? '')
  const [content, setContent] = useState<ContentContext | null>(null)
  const [prompt, setPrompt] = useState<string | null>(null)
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null)
  const [validation, setValidation] = useState<ValidationReport | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleRetrieve() {
    try {
      setError(null)
      const context = retrieve(selectedId)
      setContent(context)
      setPrompt(buildPrompt(context))
      setGeneratedMessage(null)
      setValidation(null)
    } catch (err) {
      setContent(null)
      setPrompt(null)
      setGeneratedMessage(null)
      setValidation(null)
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    }
  }

  async function handleGenerate() {
    if (!prompt || !content) {
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      const message = await generateMessage(prompt)
      setGeneratedMessage(message)
      setValidation(validateMessage(message, content))
    } catch (err) {
      setGeneratedMessage(null)
      setValidation(null)
      setError(err instanceof Error ? err.message : 'Something went wrong writing the message. Try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Content Context Engine</h1>
        <p className="app-header__subtitle">
          This walkthrough shows how good writing rules help AI write clear, helpful error
          messages. Password problems are just the example.
        </p>
        <p className="app-header__note">
          Work through steps 1 to 3 to see what happens behind the scenes. Your finished
          message appears at the bottom in step 4.
        </p>
        <ol className="workflow-steps">
          <li>Pick a situation</li>
          <li>See the writing rules</li>
          <li>See what the AI reads</li>
          <li>Get your message</li>
        </ol>
      </header>

      <main className="app-main">
        <ScenarioSelector
          scenarios={scenarios}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onRetrieve={handleRetrieve}
        />

        {error && <p className="error-banner">{error}</p>}

        {content && prompt && (
          <>
            <RetrievedContext content={content} />
            <PromptPanel prompt={prompt} />
            <GeneratedMessage
              message={generatedMessage}
              validation={validation}
              loading={isGenerating}
              onGenerate={handleGenerate}
            />
          </>
        )}
      </main>
    </div>
  )
}

export default App

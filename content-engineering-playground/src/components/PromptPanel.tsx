import { Collapsible } from './Collapsible'

interface PromptPanelProps {
  prompt: string
  compact?: boolean
}

export function PromptPanel({ prompt, compact = false }: PromptPanelProps) {
  return (
    <section className="flow-section">
      <header className="flow-section__header">
        <span className="flow-section__step" aria-hidden="true">
          3
        </span>
        <div>
          <h2>What the AI actually reads</h2>
          {!compact && (
            <p className="flow-section__lead">
              Those writing rules are turned into simple instructions, like a brief you would
              give a human writer. This is the text sent to the AI. Scroll down to step 4 when
              you are ready to see the finished message.
            </p>
          )}
        </div>
      </header>

      <div className="section-card prompt-panel">
        <Collapsible title="Full instructions" preview="Ready to send to the AI">
          {!compact && (
            <p className="panel-note">
              This is the exact text the AI receives when you click Write the message in step 4
              below.
            </p>
          )}
          <pre className="prompt-code">
            <code>{prompt}</code>
          </pre>
        </Collapsible>
      </div>
    </section>
  )
}

import type { ContentContext } from '../services/retriever'
import { Collapsible } from './Collapsible'
import { ContextField } from './ContextCard'

interface RetrievedContextProps {
  content: ContentContext
  compact?: boolean
}

export function RetrievedContext({ content, compact = false }: RetrievedContextProps) {
  const { scenario, messageType, patterns, writingRules, terminology, examples } = content
  const example = examples[0]
  const pattern = patterns[0]

  const writingRulesPreview = writingRules.map((rule) => rule.name).join(', ')
  const terminologyPreview = terminology.map((term) => term.preferred).join(', ')

  return (
    <section className="flow-section">
      <header className="flow-section__header">
        <span className="flow-section__step" aria-hidden="true">
          2
        </span>
        <div>
          <h2>The writing rules for this situation</h2>
          {!compact && (
            <p className="flow-section__lead">
              Before the AI writes anything, it needs rules to follow. These cover the tone,
              word choices, message structure, and a trusted example. Your finished message
              still comes at the bottom in step 4.
            </p>
          )}
        </div>
      </header>

      <div className="section-card context-stack">
        <Collapsible title="The situation" preview={scenario.title} defaultOpen>
          <ContextField label="Name" value={scenario.title} />
          <ContextField label="What happened" value={scenario.description} />
          <ContextField label="What the user is trying to do" value={scenario.userGoal} />
          <ContextField label="Where this shows up" value={scenario.component.replace(/-/g, ' ')} />
        </Collapsible>

        <Collapsible title="Kind of message" preview={messageType.name}>
          <ContextField label="Type" value={messageType.name} />
          <ContextField label="Why we show it" value={messageType.purpose} />
          <ContextField label="How it should sound" value={messageType.tone} />
          <ContextField label="What the user should do next" value={messageType.userOutcome} />
        </Collapsible>

        {pattern && (
          <Collapsible title="How to structure the message" preview={pattern.name}>
            <ContextField label="Pattern" value={pattern.name} />
            <ContextField label="What it means" value={pattern.description} />
            <ContextField label="Suggested order" value={pattern.structure} />
            <ContextField label="Good example" value={pattern.goodExample} />
            <ContextField label="What to avoid" value={pattern.avoid} />
          </Collapsible>
        )}

        <Collapsible
          title="Writing rules"
          preview={`${writingRules.length} rules · ${writingRulesPreview}`}
        >
          <ul className="rule-list rule-list--detailed">
            {writingRules.map((rule) => (
              <li key={rule.id}>
                <strong>{rule.name}</strong>
                <span>{rule.description}</span>
              </li>
            ))}
          </ul>
        </Collapsible>

        <Collapsible title="Words to use (and avoid)" preview={terminologyPreview}>
          <div className="terminology-chips">
            {terminology.map((term) => (
              <span key={term.id} className="terminology-chip">
                {term.preferred}
              </span>
            ))}
          </div>
          <ul className="terminology-details">
            {terminology.map((term) => (
              <li key={term.id}>
                <strong>{term.preferred}:</strong> {term.definition}
                {term.avoid.length > 0 && (
                  <span className="terminology-details__avoid">
                    {' '}
                    Don&apos;t use: {term.avoid.join(', ')}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Collapsible>

        {example && (
          <Collapsible title="Example we trust" preview={`"${example.message}"`}>
            <div className="approved-example-box">
              <p className="approved-example-box__message">{example.message}</p>
            </div>
            <ContextField label="Why this works well" value={example.why} />
          </Collapsible>
        )}
      </div>
    </section>
  )
}

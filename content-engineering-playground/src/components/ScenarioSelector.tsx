import type { Scenario } from '../types'

interface ScenarioSelectorProps {
  scenarios: Scenario[]
  selectedId: string
  onSelect: (id: string) => void
  onRetrieve: () => void
  compact?: boolean
}

export function ScenarioSelector({
  scenarios,
  selectedId,
  onSelect,
  onRetrieve,
  compact = false,
}: ScenarioSelectorProps) {
  const selected = scenarios.find((scenario) => scenario.id === selectedId)

  return (
    <section className="flow-section">
      <header className="flow-section__header">
        <span className="flow-section__step" aria-hidden="true">
          1
        </span>
        <div>
          <h2>Pick a situation</h2>
          {!compact && (
            <p className="flow-section__lead">
              Choose a password problem a user might run into. Each one has its own writing
              rules: how to say it, which words to use, and an example of good copy.
            </p>
          )}
        </div>
      </header>

      <div className="section-card scenario-controls">
        <label htmlFor="scenario-select" className="field-label">
          What went wrong?
        </label>
        <div className="scenario-controls__row">
          <select
            id="scenario-select"
            value={selectedId}
            onChange={(event) => onSelect(event.target.value)}
          >
            {scenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.title}
              </option>
            ))}
          </select>
          <button type="button" className="primary-button" onClick={onRetrieve}>
            Continue
          </button>
        </div>
        {selected && (
          <p className="scenario-summary">
            <strong>In plain terms:</strong> {selected.description}
          </p>
        )}
        {!compact && (
          <p className="helper-text">
            The next steps show you the writing rules and what the AI reads. The actual message
            you can use appears at the bottom in step 4.
          </p>
        )}
      </div>
    </section>
  )
}

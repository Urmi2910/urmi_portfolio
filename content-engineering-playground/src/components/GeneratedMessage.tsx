import type { ValidationReport } from '../services/validator'
import { ValidationResults } from './ValidationResults'

interface GeneratedMessageProps {
  message: string | null
  validation: ValidationReport | null
  loading: boolean
  onGenerate: () => void
}

export function GeneratedMessage({
  message,
  validation,
  loading,
  onGenerate,
}: GeneratedMessageProps) {
  return (
    <section className="flow-section flow-section--final">
      <header className="flow-section__header">
        <span className="flow-section__step" aria-hidden="true">
          4
        </span>
        <div>
          <h2>Your finished message</h2>
          <p className="flow-section__lead">
            This is the result. Click the button and the AI writes a short message for your
            situation, using the writing rules from the steps above.
          </p>
        </div>
      </header>

      <button
        type="button"
        className="primary-button"
        onClick={onGenerate}
        disabled={loading}
      >
        {loading ? 'Writing…' : 'Write the message'}
      </button>

      <div className="section-card product-message-card" aria-live="polite">
        <p className="product-message-card__label">Your message</p>
        {message ? (
          <p className="product-message-card__text">{message}</p>
        ) : (
          <p className="product-message-card__placeholder">
            Your finished message will show up here. Click Write the message above to generate
            it.
          </p>
        )}
        <p className="product-message-card__footnote">
          This is the final output for the situation you picked in step 1.
        </p>
      </div>

      {validation && <ValidationResults report={validation} />}
    </section>
  )
}

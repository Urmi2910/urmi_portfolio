import type { ValidationReport } from '../services/validator'
import { Collapsible } from './Collapsible'

interface ValidationResultsProps {
  report: ValidationReport
}

const BADGE_LABELS: Record<string, string> = {
  'approved-terminology': 'Uses the right words',
  'avoided-terminology': 'Avoids banned words',
  'one-issue': 'One problem at a time',
  'active-voice': 'Direct wording',
  'message-length': 'Short enough',
}

function getBadgeLabel(id: string, fallback: string): string {
  return BADGE_LABELS[id] ?? fallback
}

export function ValidationResults({ report }: ValidationResultsProps) {
  return (
    <div className="validation-results">
      <div className="validation-results__header">
        <h3 className="validation-results__title">Did it follow the rules?</h3>
        <p
          className={
            report.passed
              ? 'validation-results__status validation-results__status--pass'
              : 'validation-results__status validation-results__status--fail'
          }
        >
          {report.passed ? 'Looks good' : 'A few things to fix'}
        </p>
      </div>

      <p className="validation-results__intro">
        Quick checks to see if the message matches the writing rules from step 2.
      </p>

      <div className="validation-badges">
        {report.checks.map((check) => (
          <span
            key={check.id}
            className={
              check.passed
                ? 'validation-badge validation-badge--pass'
                : 'validation-badge validation-badge--fail'
            }
          >
            {check.passed ? '✓' : '✗'} {getBadgeLabel(check.id, check.label)}
          </span>
        ))}
      </div>

      <Collapsible
        title="Why each check passed or failed"
        preview={`${report.checks.filter((c) => c.passed).length} of ${report.checks.length} passed`}
      >
        <ul className="validation-details">
          {report.checks.map((check) => (
            <li
              key={check.id}
              className={
                check.passed ? 'validation-details__item--pass' : 'validation-details__item--fail'
              }
            >
              <span className="validation-details__label">
                {check.passed ? '✓' : '✗'} {getBadgeLabel(check.id, check.label)}
              </span>
              <span className="validation-details__detail">{check.detail}</span>
            </li>
          ))}
        </ul>
      </Collapsible>
    </div>
  )
}

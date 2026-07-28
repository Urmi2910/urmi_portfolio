import type { ContentContext } from '../types'

export interface ValidationCheck {
  id: string
  label: string
  passed: boolean
  detail: string
}

export interface ValidationReport {
  passed: boolean
  checks: ValidationCheck[]
}

const IMPERATIVE_START =
  /^(Add|Use|Enter|Remove|Choose|Make|Re-enter|Include|Create|Try|Update)\b/i

const PASSIVE_PATTERNS = [
  /\bmust be\b/i,
  /\bshould be\b/i,
  /\bwas\b/i,
  /\bwere\b/i,
  /\bis required\b/i,
  /\bare required\b/i,
]

function includesTerm(text: string, term: string): boolean {
  return text.toLowerCase().includes(term.toLowerCase())
}

function checkApprovedTerminology(
  message: string,
  terminology: ContentContext['terminology'],
): ValidationCheck {
  if (terminology.length === 0) {
    return {
      id: 'approved-terminology',
      label: 'Approved terminology was used',
      passed: true,
      detail: 'No terminology rules apply to this scenario.',
    }
  }

  const matched = terminology.filter((term) => includesTerm(message, term.preferred))
  const passed = matched.length > 0

  return {
    id: 'approved-terminology',
    label: 'Approved terminology was used',
    passed,
    detail: passed
      ? `Found: ${matched.map((term) => `"${term.preferred}"`).join(', ')}`
      : `Expected one of: ${terminology.map((term) => `"${term.preferred}"`).join(', ')}`,
  }
}

function checkAvoidedTerminology(
  message: string,
  terminology: ContentContext['terminology'],
): ValidationCheck {
  const found = terminology.flatMap((term) =>
    term.avoid.filter((word) => includesTerm(message, word)).map((word) => `"${word}"`),
  )

  return {
    id: 'avoided-terminology',
    label: 'Avoided terminology was not used',
    passed: found.length === 0,
    detail:
      found.length === 0
        ? 'No avoided terms detected.'
        : `Found avoided terms: ${found.join(', ')}`,
  }
}

function checkOneIssue(message: string): ValidationCheck {
  const hasMultipleIssues = /\band\b/i.test(message) && message.split('.').length <= 2
  const passed = !hasMultipleIssues

  return {
    id: 'one-issue',
    label: 'One issue is addressed',
    passed,
    detail: passed
      ? 'Message appears to address a single issue.'
      : 'Message may address multiple issues (detected "and").',
  }
}

function checkActiveVoice(message: string): ValidationCheck {
  const trimmed = message.trim()
  const startsWithImperative = IMPERATIVE_START.test(trimmed)
  const hasPassivePattern = PASSIVE_PATTERNS.some((pattern) => pattern.test(trimmed))
  const passed = startsWithImperative && !hasPassivePattern

  return {
    id: 'active-voice',
    label: 'Active voice appears',
    passed,
    detail: passed
      ? 'Message starts with a direct instruction.'
      : 'Message may use passive phrasing or lack a clear imperative.',
  }
}

function checkMessageLength(message: string): ValidationCheck {
  const length = message.trim().length
  const passed = length > 0 && length <= 80

  return {
    id: 'message-length',
    label: 'Message length is under 80 characters',
    passed,
    detail: passed
      ? `${length} characters.`
      : length === 0
        ? 'Message is empty.'
        : `${length} characters. That exceeds the 80-character limit.`,
  }
}

/**
 * Lightweight demonstration validator.
 * Uses simple heuristics — not suitable for production quality assurance.
 */
export function validateMessage(message: string, context: ContentContext): ValidationReport {
  const trimmed = message.trim()

  const checks = [
    checkApprovedTerminology(trimmed, context.terminology),
    checkAvoidedTerminology(trimmed, context.terminology),
    checkOneIssue(trimmed),
    checkActiveVoice(trimmed),
    checkMessageLength(trimmed),
  ]

  return {
    passed: checks.every((check) => check.passed),
    checks,
  }
}

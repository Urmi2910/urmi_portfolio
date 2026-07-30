import type { ContentContext } from './retriever'
import type { Pattern, Terminology, WritingRule } from '../types'

function formatComponent(component: string): string {
  const label = component.replace(/-/g, ' ')
  return label.charAt(0).toUpperCase() + label.slice(1)
}

function formatPatternGuidance(pattern: Pattern): string {
  return [
    `${pattern.name}: ${pattern.description}`,
    `Structure the message as: ${pattern.structure}.`,
    `Strong example: "${pattern.goodExample}".`,
    `Do not write: "${pattern.avoid}".`,
  ].join(' ')
}

function formatWritingRuleGuidance(rule: WritingRule): string {
  return `${rule.description} ${rule.reason}`
}

function formatTerminologyGuidance(term: Terminology): string {
  const avoid = term.avoid.map((item) => `"${item}"`).join(', ')

  return `Use "${term.preferred}" (${term.definition.charAt(0).toLowerCase()}${term.definition.slice(1)}). Do not use ${avoid}.`
}

function formatApprovedExample(message: string, why: string): string {
  return `"${message}". ${why}`
}

function joinSection(title: string, body: string): string {
  return `${title}\n${body}`
}

export function buildPrompt(content: ContentContext): string {
  const { scenario, messageType, patterns, writingRules, terminology, examples } = content

  const patternGuidance =
    patterns.length > 0
      ? patterns.map(formatPatternGuidance).join('\n\n')
      : 'No pattern specified.'

  const writingRuleGuidance =
    writingRules.length > 0
      ? writingRules.map((rule) => `- ${formatWritingRuleGuidance(rule)}`).join('\n')
      : 'No writing rules specified.'

  const terminologyGuidance =
    terminology.length > 0
      ? terminology.map(formatTerminologyGuidance).join('\n')
      : 'No terminology specified.'

  const approvedExamples =
    examples.length > 0
      ? examples.map((example) => formatApprovedExample(example.message, example.why)).join('\n')
      : 'No approved examples specified.'

  const componentLabel = formatComponent(scenario.component)

  return [
    'You are writing product UI copy. Follow the editorial brief below.',
    '',
    joinSection('Scenario', scenario.description),
    '',
    joinSection('User Goal', scenario.userGoal),
    '',
    joinSection(
      'Component',
      `${componentLabel}: this message appears in the product interface at the point of failure.`,
    ),
    '',
    joinSection('Message Type', messageType.name),
    '',
    joinSection('Purpose', messageType.purpose),
    '',
    joinSection('Tone', messageType.tone),
    '',
    joinSection('Pattern', patternGuidance),
    '',
    joinSection('Writing Rules', writingRuleGuidance),
    '',
    joinSection('Terminology', terminologyGuidance),
    '',
    joinSection('Approved Examples', approvedExamples),
    '',
    joinSection(
      'Task',
      `Write one clear ${componentLabel.toLowerCase()} message. Match the approved examples in quality, not necessarily in exact wording.`,
    ),
  ].join('\n')
}

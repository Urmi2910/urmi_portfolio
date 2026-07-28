import scenarioData from '../../assets/scenarios.json'
import type { ContentContext } from '../types'
import type { Example, MessageType, Pattern, Scenario, Terminology, WritingRule } from '../types'

const scenarios: Scenario[] = scenarioData

const messageTypes = import.meta.glob<MessageType>('../../assets/message-types/*.json', {
  eager: true,
  import: 'default',
})

const patterns = import.meta.glob<Pattern>('../../assets/patterns/*.json', {
  eager: true,
  import: 'default',
})

const writingRules = import.meta.glob<WritingRule>('../../assets/writing-rules/*.json', {
  eager: true,
  import: 'default',
})

const terminology = import.meta.glob<Terminology>('../../assets/terminology/*.json', {
  eager: true,
  import: 'default',
})

const examples = import.meta.glob<Example>('../../assets/examples/*.json', {
  eager: true,
  import: 'default',
})

const scenarioIndex = indexById(scenarios)
const messageTypeIndex = indexById(messageTypes)
const patternIndex = indexById(patterns)
const writingRuleIndex = indexById(writingRules)
const terminologyIndex = indexById(terminology)
const exampleIndex = indexById(examples)

function indexById<T extends { id: string }>(
  records: Record<string, T> | T[],
): Map<string, T> {
  const items = Array.isArray(records) ? records : Object.values(records)
  return new Map(items.map((item) => [item.id, item]))
}

function getById<T extends { id: string }>(
  index: Map<string, T>,
  id: string,
  label: string,
): T {
  const item = index.get(id)
  if (!item) {
    throw new Error(`${label} not found: ${id}`)
  }
  return item
}

function resolveByIds<T extends { id: string }>(
  index: Map<string, T>,
  ids: string[],
  label: string,
): T[] {
  return ids.map((id) => getById(index, id, label))
}

export function getScenarios(): Scenario[] {
  return [...scenarios].sort((a, b) => a.title.localeCompare(b.title))
}

/**
 * Assembles a Content Context by following explicit ID references on the scenario.
 * No text matching or inference is used.
 */
export function retrieve(scenarioId: string): ContentContext {
  // 1. Load scenario
  const scenario = getById(scenarioIndex, scenarioId, 'Scenario')

  // 2. Read referenced IDs from scenario fields:
  //    messageType, pattern, writingRules, terminology, example

  // 3. Load message type
  const messageType = getById(messageTypeIndex, scenario.messageType, 'Message type')

  // 4. Load pattern
  const resolvedPatterns = [getById(patternIndex, scenario.pattern, 'Pattern')]

  // 5. Load writing rules
  const resolvedWritingRules = resolveByIds(
    writingRuleIndex,
    scenario.writingRules,
    'Writing rule',
  )

  // 6. Load terminology
  const resolvedTerminology = resolveByIds(
    terminologyIndex,
    scenario.terminology,
    'Terminology',
  )

  // 7. Load example
  const resolvedExamples = [getById(exampleIndex, scenario.example, 'Example')]

  return {
    scenario,
    messageType,
    patterns: resolvedPatterns,
    writingRules: resolvedWritingRules,
    terminology: resolvedTerminology,
    examples: resolvedExamples,
  }
}

export type { ContentContext }

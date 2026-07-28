import type { Example } from './example'
import type { MessageType } from './message-type'
import type { Pattern } from './pattern'
import type { Scenario } from './scenario'
import type { Terminology } from './terminology'
import type { WritingRule } from './writing-rule'

export interface ContentContext {
  scenario: Scenario
  messageType: MessageType
  patterns: Pattern[]
  writingRules: WritingRule[]
  terminology: Terminology[]
  examples: Example[]
}

import type { ReactNode } from 'react'

interface CollapsibleProps {
  title: string
  preview?: string
  defaultOpen?: boolean
  children: ReactNode
}

export function Collapsible({ title, preview, defaultOpen = false, children }: CollapsibleProps) {
  return (
    <details className="collapsible" open={defaultOpen || undefined}>
      <summary className="collapsible__summary">
        <div className="collapsible__heading">
          <span className="collapsible__title">{title}</span>
          {preview && <span className="collapsible__preview">{preview}</span>}
        </div>
        <span className="collapsible__toggle" aria-hidden="true" />
      </summary>
      <div className="collapsible__content">{children}</div>
    </details>
  )
}

import type { ReactNode } from 'react'

interface ContextCardProps {
  title: string
  children: ReactNode
}

export function ContextCard({ title, children }: ContextCardProps) {
  return (
    <article className="context-card">
      <h3>{title}</h3>
      <div className="context-card__body">{children}</div>
    </article>
  )
}

interface ContextFieldProps {
  label: string
  value: string | string[]
}

export function ContextField({ label, value }: ContextFieldProps) {
  return (
    <div className="context-field">
      <p className="context-field__label">{label}</p>
      {Array.isArray(value) ? (
        <ul className="context-field__list">
          {value.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="context-field__value">{value}</p>
      )}
    </div>
  )
}

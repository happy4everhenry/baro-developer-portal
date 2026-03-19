export function StepGuide({ children }) {
  return <div className="kl-steps">{children}</div>
}

export function Step({ number, title, icon, children }) {
  return (
    <div className="kl-step">
      <div className="kl-step-indicator">
        <div className="kl-step-number">{icon || number}</div>
        <div className="kl-step-line" />
      </div>
      <div className="kl-step-content">
        {title && <div className="kl-step-title">{title}</div>}
        <div className="kl-step-body">{children}</div>
      </div>
    </div>
  )
}

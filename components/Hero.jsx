export function Hero({ title, subtitle, description, children }) {
  return (
    <div className="kl-hero">
      <div className="kl-hero-glow" />
      <div className="kl-hero-content">
        {subtitle && <div className="kl-hero-subtitle">{subtitle}</div>}
        <h1 className="kl-hero-title">{title}</h1>
        {description && <p className="kl-hero-description">{description}</p>}
        {children && <div className="kl-hero-actions">{children}</div>}
      </div>
    </div>
  )
}

export function HeroBadge({ children, color = 'jade' }) {
  return <span className={`kl-hero-badge kl-hero-badge-${color}`}>{children}</span>
}

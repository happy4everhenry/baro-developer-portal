const iconMap = {
  // Common actions
  'check': '✓', 'x': '✗', 'plus': '＋', 'minus': '−',
  'arrow': '→', 'download': '⬇️', 'upload': '⬆️', 'refresh': '🔄',
  // Objects
  'book': '📖', 'user': '👤', 'star': '★', 'heart': '♥',
  'warning': '⚠️', 'info': 'ℹ️', 'lock': '🔒', 'key': '🔑',
  'globe': '🌐', 'code': '💻', 'shield': '🛡️', 'eye': '👁️',
  'brain': '🧠', 'target': '🎯', 'light': '💡', 'fire': '🔥',
  'link': '🔗', 'search': '🔍', 'phone': '📱', 'mail': '✉️',
  'bell': '🔔', 'paint': '🎨', 'tool': '🔧', 'cloud': '☁️',
  'money': '💰', 'clock': '⏱️', 'flag': '🏁', 'pen': '✏️',
  'folder': '📁', 'layers': '📚', 'zap': '⚡', 'rocket': '🚀',
  'chart': '📊', 'database': '🗄️', 'settings': '⚙️',
  // Lucide/Feather icon names → emoji
  'alert-circle': '⚠️', 'bar-chart': '📊', 'pie-chart': '📊',
  'trending-up': '📈', 'dollar-sign': '💲', 'building': '🏢',
  'layout': '📐', 'list': '📋', 'type': '🔤', 'heading': '📝',
  'monitor': '🖥️', 'smartphone': '📱', 'image': '🖼️',
  'file-text': '📄', 'map': '🗺️', 'hash': '#️⃣',
  'align-left': '📝', 'crosshair': '🎯', 'award': '🏆',
  'mic': '🎙️', 'minimize': '⊡', 'minus-circle': '⊖',
  'moon': '🌙', 'sun': '☀️', 'palette': '🎨', 'pen-tool': '✏️',
  'ruler': '📏', 'share-2': '🔗', 'square': '⬜', 'circle': '⭕',
  'tag': '🏷️',
}

export function FeatureCard({ icon, title, description, href, tag, color = 'jade' }) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href, className: `kl-feature-card kl-feature-card-${color}` } : { className: `kl-feature-card kl-feature-card-${color}` }
  const resolvedIcon = iconMap[icon] || icon

  return (
    <Wrapper {...wrapperProps}>
      <div className="kl-feature-card-icon">{resolvedIcon}</div>
      <div className="kl-feature-card-body">
        <div className="kl-feature-card-title">
          {title}
          {tag && <span className="kl-feature-card-tag">{tag}</span>}
        </div>
        {description && <div className="kl-feature-card-desc">{description}</div>}
      </div>
      {href && <span className="kl-feature-card-arrow">→</span>}
    </Wrapper>
  )
}

export function FeatureGrid({ children, columns = 2 }) {
  return (
    <div className="kl-feature-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children}
    </div>
  )
}

export function QuickNav({ children }) {
  return <div className="kl-quick-nav">{children}</div>
}

export function QuickNavCard({ icon, title, description, href, badge }) {
  return (
    <a href={href} className="kl-quick-nav-card">
      <div className="kl-quick-nav-icon">{icon}</div>
      <div className="kl-quick-nav-title">{title}</div>
      <div className="kl-quick-nav-desc">{description}</div>
      {badge && <div className="kl-quick-nav-badge">{badge}</div>}
    </a>
  )
}

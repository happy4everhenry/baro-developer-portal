export function Timeline({ children }) {
  return <div className="kl-timeline">{children}</div>
}

export function TimelineItem({ date, title, status = 'default', icon, children }) {
  return (
    <div className={`kl-timeline-item kl-timeline-${status}`}>
      <div className="kl-timeline-marker">
        <div className="kl-timeline-dot">{icon}</div>
        <div className="kl-timeline-connector" />
      </div>
      <div className="kl-timeline-content">
        {date && <div className="kl-timeline-date">{date}</div>}
        <div className="kl-timeline-title">{title}</div>
        {children && <div className="kl-timeline-body">{children}</div>}
      </div>
    </div>
  )
}

export function StatGrid({ children, columns = 4 }) {
  return (
    <div
      className="kl-stat-grid"
      data-columns={columns}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  )
}

export function StatCard({ value, label }) {
  return (
    <div className="kl-stat-card">
      <div className="kl-stat-value">{value}</div>
      <div className="kl-stat-label">{label}</div>
    </div>
  )
}

export function StatusBadge({ status, children }) {
  const colorMap = {
    live: 'kl-badge-jade',
    active: 'kl-badge-jade',
    done: 'kl-badge-jade',
    planned: 'kl-badge-amber',
    warning: 'kl-badge-amber',
    wip: 'kl-badge-amber',
    error: 'kl-badge-red',
    deprecated: 'kl-badge-red',
    info: 'kl-badge-blue',
    default: 'kl-badge-gray',
  }

  const className = colorMap[status?.toLowerCase()] || colorMap.default

  return <span className={`kl-badge ${className}`}>{children || status}</span>
}

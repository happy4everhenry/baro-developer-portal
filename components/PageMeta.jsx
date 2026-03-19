export function PageMeta({ status, layer, owner, since }) {
  const statusConfig = {
    live: { label: 'Live', className: 'kl-meta-live' },
    planned: { label: 'Planned', className: 'kl-meta-planned' },
    wip: { label: 'In Progress', className: 'kl-meta-wip' },
    deprecated: { label: 'Deprecated', className: 'kl-meta-deprecated' },
  }

  const layerConfig = {
    frontend: { label: 'Frontend', className: 'kl-meta-layer-fe' },
    backend: { label: 'Backend', className: 'kl-meta-layer-be' },
    shared: { label: 'Shared', className: 'kl-meta-layer-shared' },
    infra: { label: 'Infrastructure', className: 'kl-meta-layer-infra' },
  }

  const s = statusConfig[status] || statusConfig.live
  const l = layerConfig[layer] || layerConfig.shared

  return (
    <div className="kl-page-meta">
      <span className={`kl-meta-tag ${s.className}`}>{s.label}</span>
      <span className={`kl-meta-tag ${l.className}`}>{l.label}</span>
      {owner && <span className="kl-meta-tag kl-meta-owner">{owner}</span>}
      {since && <span className="kl-meta-detail">Since {since}</span>}
    </div>
  )
}

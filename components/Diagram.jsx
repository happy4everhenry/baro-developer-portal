'use client'

import { useState } from 'react'

export function Diagram({ title, caption, children }) {
  return (
    <div className="kl-diagram">
      {title && <div className="kl-diagram-title">{title}</div>}
      <div className="kl-diagram-canvas">{children}</div>
      {caption && <div className="kl-diagram-caption">{caption}</div>}
    </div>
  )
}

export function DiagramNode({ label, sublabel, type = 'default', icon, x, y, width = 'auto' }) {
  return (
    <div
      className={`kl-diagram-node kl-diagram-node-${type}`}
      style={{ gridColumn: x, gridRow: y, width }}
    >
      {icon && <span className="kl-diagram-node-icon">{icon}</span>}
      <span className="kl-diagram-node-label">{label}</span>
      {sublabel && <span className="kl-diagram-node-sublabel">{sublabel}</span>}
    </div>
  )
}

export function DiagramArrow({ direction = 'down', label, span = 1 }) {
  const arrows = { down: '↓', right: '→', left: '←', up: '↑', both: '↔' }
  return (
    <div className={`kl-diagram-arrow kl-diagram-arrow-${direction}`}>
      <span className="kl-diagram-arrow-symbol">{arrows[direction]}</span>
      {label && <span className="kl-diagram-arrow-label">{label}</span>}
    </div>
  )
}

export function DiagramRow({ children, gap = '12px', align = 'center' }) {
  return (
    <div className="kl-diagram-row" style={{ gap, alignItems: align }}>
      {children}
    </div>
  )
}

export function DiagramGroup({ label, color = 'jade', children }) {
  return (
    <div className={`kl-diagram-group kl-diagram-group-${color}`}>
      {label && <div className="kl-diagram-group-label">{label}</div>}
      <div className="kl-diagram-group-content">{children}</div>
    </div>
  )
}

export function InfoBox({ type = 'info', title, children }) {
  const icons = {
    info: 'ℹ️',
    tip: '💡',
    warning: '⚠️',
    danger: '🚫',
    note: '📝',
    fun: '🎮',
  }

  return (
    <div className={`kl-infobox kl-infobox-${type}`}>
      <div className="kl-infobox-header">
        <span className="kl-infobox-icon">{icons[type] || icons.info}</span>
        {title && <span className="kl-infobox-title">{title}</span>}
      </div>
      <div className="kl-infobox-body">{children}</div>
    </div>
  )
}

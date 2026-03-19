'use client'

import { useState } from 'react'

export function Tooltip({ text, children }) {
  const [show, setShow] = useState(false)

  return (
    <span
      className="kl-tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="kl-tooltip-trigger">{children}</span>
      {show && (
        <span className="kl-tooltip" role="tooltip">
          {text}
          <span className="kl-tooltip-arrow" />
        </span>
      )}
    </span>
  )
}

export function Compare({ before, after, beforeLabel = 'Before', afterLabel = 'After' }) {
  return (
    <div className="kl-compare">
      <div className="kl-compare-side kl-compare-before">
        <div className="kl-compare-label">{beforeLabel}</div>
        <div className="kl-compare-content">{before}</div>
      </div>
      <div className="kl-compare-divider">
        <span className="kl-compare-vs">VS</span>
      </div>
      <div className="kl-compare-side kl-compare-after">
        <div className="kl-compare-label">{afterLabel}</div>
        <div className="kl-compare-content">{after}</div>
      </div>
    </div>
  )
}

export function ProgressBar({ value, max = 100, label, color = 'jade' }) {
  const percent = Math.round((value / max) * 100)
  return (
    <div className="kl-progress">
      {label && (
        <div className="kl-progress-header">
          <span className="kl-progress-label">{label}</span>
          <span className="kl-progress-value">{percent}%</span>
        </div>
      )}
      <div className="kl-progress-track">
        <div
          className={`kl-progress-fill kl-progress-fill-${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

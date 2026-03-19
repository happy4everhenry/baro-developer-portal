'use client'

import { useState } from 'react'

/**
 * ScreenMap - Interactive visual wireframe component.
 * Renders a visual representation of an app screen with clickable regions
 * that link to source code documentation.
 */
export function ScreenMap({ title, children }) {
  return (
    <div className="kl-screen-map">
      {title && <div className="kl-screen-map-title">{title}</div>}
      <div className="kl-screen-map-device">
        <div className="kl-screen-map-notch" />
        <div className="kl-screen-map-body">
          {children}
        </div>
        <div className="kl-screen-map-home-bar" />
      </div>
    </div>
  )
}

/**
 * ScreenRegion - A clickable region within a ScreenMap.
 * Clicking opens the linked documentation page.
 */
export function ScreenRegion({ label, file, description, link, color = 'jade', children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const colorMap = {
    jade: 'var(--kl-jade)',
    amber: 'var(--kl-amber)',
    blue: 'var(--kl-blue)',
    red: 'var(--kl-red)',
    purple: '#7C3AED',
  }

  const bgMap = {
    jade: 'rgba(34, 197, 94, 0.06)',
    amber: 'rgba(212, 160, 23, 0.06)',
    blue: 'rgba(52, 120, 246, 0.06)',
    red: 'rgba(224, 72, 72, 0.06)',
    purple: 'rgba(100, 48, 160, 0.06)',
  }

  const borderColor = colorMap[color] || colorMap.jade
  const bgColor = bgMap[color] || bgMap.jade

  return (
    <div
      className={`kl-screen-region ${isExpanded ? 'kl-screen-region-expanded' : ''}`}
      style={{
        borderColor: borderColor,
        background: isExpanded ? bgColor : 'transparent',
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="kl-screen-region-header">
        <span className="kl-screen-region-label" style={{ color: borderColor }}>
          {label}
        </span>
        <span className="kl-screen-region-toggle" style={{ color: borderColor }}>
          {isExpanded ? '▾' : '▸'}
        </span>
      </div>

      {children && (
        <div className="kl-screen-region-preview">
          {children}
        </div>
      )}

      {isExpanded && (
        <div className="kl-screen-region-detail">
          {file && (
            <div className="kl-screen-region-file">
              <span className="kl-screen-region-file-icon">📄</span>
              <code>{file}</code>
            </div>
          )}
          {description && (
            <div className="kl-screen-region-desc">{description}</div>
          )}
          {link && (
            <a href={link} className="kl-screen-region-link" style={{ color: borderColor }}>
              View Documentation →
            </a>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * ScreenLabel - A non-clickable label/annotation within a ScreenMap.
 */
export function ScreenLabel({ text, align = 'left' }) {
  return (
    <div className="kl-screen-label" style={{ textAlign: align }}>
      {text}
    </div>
  )
}

/**
 * ScreenSubRegion - A nested sub-component region within a ScreenRegion or ScreenMap.
 * Shows component-level detail with file reference and brief description.
 */
export function ScreenSubRegion({ label, file, description, color = 'jade', children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const colorMap = {
    jade: 'var(--kl-jade)',
    amber: 'var(--kl-amber)',
    blue: 'var(--kl-blue)',
    red: 'var(--kl-red)',
    purple: '#7C3AED',
  }

  const borderColor = colorMap[color] || colorMap.jade

  return (
    <div
      className={`kl-screen-subregion ${isExpanded ? 'kl-screen-subregion-expanded' : ''}`}
      style={{ borderColor }}
      onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded) }}
    >
      <div className="kl-screen-subregion-header">
        <span className="kl-screen-subregion-label" style={{ color: borderColor }}>
          {label}
        </span>
        <span className="kl-screen-subregion-toggle" style={{ color: borderColor }}>
          {isExpanded ? '▾' : '▸'}
        </span>
      </div>
      {children && (
        <div className="kl-screen-subregion-preview">{children}</div>
      )}
      {isExpanded && (
        <div className="kl-screen-subregion-detail">
          {file && (
            <div className="kl-screen-region-file">
              <span className="kl-screen-region-file-icon">📄</span>
              <code>{file}</code>
            </div>
          )}
          {description && (
            <div className="kl-screen-region-desc">{description}</div>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * ScreenGroup - Groups related sub-regions with a label.
 */
export function ScreenGroup({ label, children }) {
  return (
    <div className="kl-screen-group">
      {label && <div className="kl-screen-group-label">{label}</div>}
      <div className="kl-screen-group-body">
        {children}
      </div>
    </div>
  )
}

/**
 * FileLink - Inline clickable file reference that links to documentation.
 */
export function FileLink({ file, children, link }) {
  return (
    <a href={link || '#'} className="kl-file-link">
      <span className="kl-file-link-icon">📄</span>
      <code>{file}</code>
      {children && <span className="kl-file-link-desc"> — {children}</span>}
    </a>
  )
}

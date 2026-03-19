'use client'

import { useState } from 'react'

export function ColorSwatch({ name, hex, description }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="kl-swatch" onClick={handleCopy} title={`Click to copy ${hex}`}>
      <div className="kl-swatch-color" style={{ background: hex }} />
      <div className="kl-swatch-info">
        <div className="kl-swatch-name">{copied ? 'Copied!' : name}</div>
        <div className="kl-swatch-hex">{hex}</div>
        {description && (
          <div className="kl-swatch-desc">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

export function SwatchGrid({ children }) {
  return <div className="kl-swatch-grid">{children}</div>
}

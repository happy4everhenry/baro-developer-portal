'use client'

import { useState } from 'react'

export function ApiEndpoint({ method = 'GET', path, description, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const methodClass = {
    GET: 'kl-method-get',
    POST: 'kl-method-post',
    WS: 'kl-method-ws',
    DELETE: 'kl-method-delete',
    PUT: 'kl-method-post',
    PATCH: 'kl-method-post',
  }[method.toUpperCase()] || 'kl-method-get'

  return (
    <div className="kl-api-card">
      <div className="kl-api-header" onClick={() => setIsOpen(!isOpen)}>
        <span className={`kl-method-badge ${methodClass}`}>{method.toUpperCase()}</span>
        <span className="kl-api-path">{path}</span>
        {description && <span className="kl-api-desc">{description}</span>}
        <span style={{ marginLeft: 'auto', color: 'var(--kl-text-3)', fontSize: '12px' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && <div className="kl-api-body">{children}</div>}
    </div>
  )
}

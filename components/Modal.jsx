'use client'

import { useState, useEffect, useCallback } from 'react'

export function Modal({ trigger, triggerLabel, title, size = 'medium', children }) {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handleEsc = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <>
      {trigger ? (
        <span onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>{trigger}</span>
      ) : (
        <button className="kl-modal-trigger" onClick={() => setIsOpen(true)}>
          {triggerLabel || 'View Details'}
        </button>
      )}
      {isOpen && (
        <div className="kl-modal-overlay" onClick={close}>
          <div
            className={`kl-modal kl-modal-${size}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="kl-modal-header">
              {title && <h3 className="kl-modal-title">{title}</h3>}
              <button className="kl-modal-close" onClick={close} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="kl-modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

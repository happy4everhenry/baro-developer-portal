'use client'

import { useState } from 'react'

export function Accordion({ children, defaultOpen = false }) {
  return <div className="kl-accordion">{children}</div>
}

export function AccordionItem({ title, icon, badge, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`kl-accordion-item ${isOpen ? 'kl-accordion-item-open' : ''}`}>
      <button
        className="kl-accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="kl-accordion-left">
          {icon && <span className="kl-accordion-icon">{icon}</span>}
          <span className="kl-accordion-title">{title}</span>
          {badge && <span className="kl-accordion-badge">{badge}</span>}
        </span>
        <span className={`kl-accordion-chevron ${isOpen ? 'kl-accordion-chevron-open' : ''}`}>
          ›
        </span>
      </button>
      <div className={`kl-accordion-content ${isOpen ? 'kl-accordion-content-open' : ''}`}>
        <div className="kl-accordion-inner">{children}</div>
      </div>
    </div>
  )
}

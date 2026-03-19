'use client'

import { useState, Children, isValidElement } from 'react'

function isTabElement(child) {
  if (!isValidElement(child)) return false
  // Direct match
  if (child.type === Tab) return true
  // MDX wraps components — check by displayName, name, or props
  const type = child.type
  if (type?.displayName === 'Tab' || type?.name === 'Tab') return true
  // Fallback: if it has a `label` prop, treat it as a Tab
  if (child.props?.label !== undefined) return true
  return false
}

export function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const tabItems = []
  Children.forEach(children, (child) => {
    if (isTabElement(child)) {
      tabItems.push(child)
    }
  })

  if (tabItems.length === 0) return <div>{children}</div>

  return (
    <div className="kl-tabs">
      <div className="kl-tabs-header" role="tablist">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            className={`kl-tabs-trigger ${activeTab === index ? 'kl-tabs-trigger-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.icon && <span className="kl-tabs-icon">{tab.props.icon}</span>}
            {tab.props.label}
          </button>
        ))}
        <div
          className="kl-tabs-indicator"
          style={{
            width: `${100 / tabItems.length}%`,
            transform: `translateX(${activeTab * 100}%)`,
          }}
        />
      </div>
      {tabItems.map((tab, index) => (
        <div
          key={index}
          className="kl-tabs-content"
          role="tabpanel"
          style={{ display: activeTab === index ? 'block' : 'none' }}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  )
}

export function Tab({ label, icon, children }) {
  return <>{children}</>
}

Tab.displayName = 'Tab'

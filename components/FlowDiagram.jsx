export function FlowDiagram({ children }) {
  return <div className="kl-flow-diagram">{children}</div>
}

export function FlowRow({ children }) {
  return <div className="kl-flow-row">{children}</div>
}

export function FlowNode({ type = 'view', children }) {
  const typeClass = {
    view: 'kl-flow-node-view',
    vm: 'kl-flow-node-vm',
    repo: 'kl-flow-node-repo',
    model: 'kl-flow-node-model',
    service: 'kl-flow-node-service',
  }[type] || 'kl-flow-node-view'

  return <div className={`kl-flow-node ${typeClass}`}>{children}</div>
}

export function FlowArrow({ direction = 'right' }) {
  const arrows = {
    right: '→',
    left: '←',
    down: '↓',
    up: '↑',
    both: '↔',
  }

  if (direction === 'down' || direction === 'up') {
    return <div className="kl-flow-arrow-down">{arrows[direction]}</div>
  }

  return <span className="kl-flow-arrow">{arrows[direction] || '→'}</span>
}

export function PropsTable({ children }) {
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table className="kl-props-table">{children}</table>
    </div>
  )
}

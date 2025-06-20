export function Card({ className = "", ...props }) {
  return <div className={`custom-card ${className}`} {...props} />
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`custom-card-header ${className}`} {...props} />
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={`custom-card-title ${className}`} {...props} />
}

export function CardContent({ className = "", ...props }) {
  return <div className={`custom-card-content ${className}`} {...props} />
}

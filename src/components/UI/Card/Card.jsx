const Card = ({className, children}) => {
    if (!className)
        className = "card"
    return <div className={className}>{children}</div>
}

export default Card; 